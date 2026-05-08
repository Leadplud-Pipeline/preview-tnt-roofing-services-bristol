import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/data/blog-posts";

const BlogHub = () => (
  <Layout>
    <SEO title="Roofing Advice & Guides | TnT Roofing Services Bristol" description="Expert roofing tips from TnT Roofing Services Bristol. Knowledge freely shared. Guides for homeowners in the Bristol & Bristol." />
    <section className="section-dark section-padding">
      <div className="container-content">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
        <h1 className="text-3xl md:text-5xl text-secondary-foreground mb-4">Roofing Advice & Guides</h1>
        <div className="heading-rule" />
        <p className="text-secondary-foreground/80 font-sans text-lg max-w-2xl leading-relaxed">Expert tips from TnT Roofing Services Bristol. Knowledge freely shared.</p>
      </div>
    </section>
    <section className="section-light section-padding">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map(p => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="card-hover p-6 group">
              <p className="text-xs font-sans text-muted-foreground mb-2">{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
              <h2 className="text-base font-heading uppercase tracking-wide text-foreground mb-3 group-hover:text-primary transition-colors">{p.title}</h2>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
              <span className="text-sm font-sans font-semibold text-primary group-hover:underline">Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);
export default BlogHub;
