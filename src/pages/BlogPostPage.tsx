import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getBlogPostBySlug } from "@/data/blog-posts";
import { getServiceBySlug } from "@/data/services";
import NotFound from "./NotFound";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || "");
  if (!post) return <NotFound />;

  const relatedServices = post.relatedServiceSlugs.map(s => getServiceBySlug(s)).filter(Boolean);

  // Parse markdown-style content into simple HTML
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) return <h2 key={i} className="text-xl md:text-2xl mt-8 mb-3">{block.slice(3)}</h2>;
      if (block.startsWith("### ")) return <h3 key={i} className="text-lg font-heading uppercase tracking-wide mt-6 mb-2">{block.slice(4)}</h3>;
      if (block.startsWith("- ") || block.startsWith("1. ")) {
        const items = block.split("\n").filter(Boolean);
        const isOrdered = block.startsWith("1. ");
        const ListTag = isOrdered ? "ol" : "ul";
        return <ListTag key={i} className={`${isOrdered ? "list-decimal" : "list-disc"} pl-6 space-y-1 font-sans text-muted-foreground leading-relaxed`}>{items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/^[-\d.]\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />)}</ListTag>;
      }
      return <p key={i} className="font-sans text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />;
    });
  };

  return (
    <Layout>
      <SEO title={post.metaTitle} description={post.metaDesc} />
      <section className="section-dark section-padding">
        <div className="container-content">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.breadcrumbName }]} />
          <p className="text-sm font-sans text-secondary-foreground/60 mb-2">{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · TnT Roofing Services Bristol</p>
          <h1 className="text-3xl md:text-5xl text-secondary-foreground">{post.title}</h1>
        </div>
      </section>
      <article className="section-light section-padding">
        <div className="container-content max-w-3xl space-y-4">
          {renderContent(post.content)}
        </div>
      </article>
      {relatedServices.length > 0 && (
        <section className="section-surface section-padding">
          <div className="container-content max-w-3xl">
            <h2 className="text-xl md:text-2xl mb-4">Related Services</h2>
            <div className="heading-rule" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedServices.map(s => s && (
                <Link key={s.slug} to={`/services/${s.slug}`} className="block p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors font-sans">
                  <span className="font-semibold text-foreground">{s.name}</span>
                  <span className="text-muted-foreground text-sm ml-2">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* CTA Section */}
      <section className="section-dark section-padding">
        <div className="container-content max-w-3xl text-center">
          <p className="font-sans text-secondary-foreground/80 text-lg mb-6">{post.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-primary text-primary-foreground px-8 py-3 rounded font-sans font-semibold hover:opacity-90 transition-opacity">{post.ctaButton}</Link>
            <a href="tel:+447938109894" className="border border-secondary-foreground/30 text-secondary-foreground px-8 py-3 rounded font-sans font-semibold hover:bg-secondary-foreground/10 transition-colors">Call +44 7938 109894</a>
          </div>
        </div>
      </section>
      {/* BlogPosting JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title,
        author: { "@type": "Organization", name: "TnT Roofing Services Bristol" },
        publisher: { "@type": "Organization", name: "TnT Roofing Services Bristol" },
        datePublished: post.date, description: post.metaDesc
      })}} />
      {/* BreadcrumbList JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: { "@type": "Thing", "@id": "https://preview.vercel.app/" } },
          { "@type": "ListItem", position: 2, name: "Blog", item: { "@type": "Thing", "@id": "https://preview.vercel.app/blog" } },
          { "@type": "ListItem", position: 3, name: post.breadcrumbName, item: { "@type": "Thing", "@id": `https://preview.vercel.app/blog/${post.slug}` } }
        ]
      })}} />
    </Layout>
  );
};
export default BlogPostPage;
