import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Technology tips, automation guides, and business insights for Flathead County businesses.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--green-dark)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Tech Tips & Insights
            </h1>
            <p className="text-xl text-white/90">
              Practical advice for making technology work for your business — no
              jargon required.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-[var(--charcoal)]/70 mb-4">
                Blog posts coming soon!
              </p>
              <p className="text-[var(--charcoal)]/60">
                In the meantime, feel free to{' '}
                <Link
                  href="/contact"
                  className="text-[var(--green-dark)] font-medium hover:text-[var(--gold)]"
                >
                  get in touch
                </Link>{' '}
                with any questions.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`} className="block p-6">
                    <div className="flex items-center gap-2 text-sm text-[var(--charcoal)]/60 mb-3">
                      <Tag className="h-4 w-4" />
                      <span>{post.category}</span>
                      <span>•</span>
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--gold)]">
                      {post.title}
                    </h2>
                    <p className="text-[var(--charcoal)]/70 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[var(--gold)] font-medium">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Have a Question Not Covered Here?
            </h2>
            <p className="text-[var(--charcoal)]/70 mb-6">
              I'm happy to help. Reach out anytime — no question is too simple.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--gold)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--green-dark)] transition-colors"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
