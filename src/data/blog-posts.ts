export interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  metaDesc: string;
  metaTitle: string;
  breadcrumbName: string;
  relatedServiceSlugs: string[];
  ctaText: string;
  ctaButton: string;
  content: string;
}

export const blogPosts: BlogPostData[] = [];

export function getBlogPostBySlug(slug: string): BlogPostData | undefined {
  return blogPosts.find(p => p.slug === slug);
}
