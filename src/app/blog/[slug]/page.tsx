import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { Calendar, Tag, ArrowLeft, Phone } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-[var(--green-dark)] text-white py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm text-white/70 mb-4">
            <span className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:text-[var(--green-dark)] prose-a:text-[var(--gold)] prose-a:no-underline hover:prose-a:underline">
            <MDXRemote source={post.content} />
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[var(--cream)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help With This?</h2>
            <p className="text-[var(--charcoal)]/70 mb-6">
              If you'd like help implementing any of the ideas in this post,
              I'm here to help. Let's talk about your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:307-699-0064"
                className="inline-flex items-center justify-center gap-2 bg-[var(--green-dark)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--gold)] transition-colors"
              >
                <Phone className="h-5 w-5" />
                (307) 699-0064
              </a>
              <Link
                href="/free-assessment"
                className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--green-dark)] transition-colors"
              >
                Get Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
