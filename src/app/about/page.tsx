import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight, MapPin, Clock, Users, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Nevins Tech - local technology consulting for Flathead County businesses. Real expertise, no jargon, fair prices.',
};

const values = [
  {
    icon: MapPin,
    title: 'Local First',
    description:
      "We're not a distant call center. We understand the Flathead Valley business community because we're part of it.",
  },
  {
    icon: Users,
    title: 'Plain English',
    description:
      'Tech jargon is a barrier, not a feature. We explain things clearly and make sure you understand what you\'re getting.',
  },
  {
    icon: Clock,
    title: 'Responsive',
    description:
      "When something breaks, you need help now — not in three business days. We're here when you need us.",
  },
  {
    icon: Heart,
    title: 'Fair Pricing',
    description:
      'No inflated enterprise rates. We charge fairly for quality work and give you clear quotes upfront.',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--green-dark)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Your Neighbor Who Happens to Be a Tech Expert
            </h1>
            <p className="text-xl text-white/90">
              Real technology help for real businesses — without the corporate
              overhead or consultant-speak.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-[var(--green-dark)]">The Story</h2>
            <div className="prose prose-lg">
              <p className="text-[var(--charcoal)]/80 text-lg mb-4">
                I started Nevins Tech because I saw local businesses struggling
                with the same problems over and over: paying too much for
                software they barely use, doing manual work that should be
                automated, and not knowing where to start with new technology
                like AI.
              </p>
              <p className="text-[var(--charcoal)]/80 text-lg mb-4">
                The big consulting firms charge enterprise rates for basic work.
                The freelancers on the internet don't understand your business
                or your community. And the "IT guy" who set up your network
                isn't equipped to help you modernize your operations.
              </p>
              <p className="text-[var(--charcoal)]/80 text-lg mb-4">
                There needed to be something in between — someone local who
                understands modern technology and can apply it practically to
                real business problems. That's what Nevins Tech is.
              </p>
              <p className="text-[var(--charcoal)]/80 text-lg">
                I work with businesses across Flathead County: retailers,
                service companies, professional practices, and more. The common
                thread is they want technology to work for them, not against
                them — and they want someone they can actually talk to when they
                need help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[var(--green-dark)]">How I Work</h2>
            <p className="text-lg text-[var(--charcoal)]/70 max-w-2xl mx-auto">
              These aren't corporate values dreamed up in a boardroom. They're
              how I actually run my business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-xl">
                <value.icon className="h-8 w-8 text-[var(--gold)] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-[var(--charcoal)]/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[var(--green-dark)]">Proudly Local</h2>
            <p className="text-lg text-[var(--charcoal)]/80 mb-4">
              Nevins Tech serves businesses throughout Flathead County,
              including:
            </p>
            <p className="text-xl font-semibold text-[var(--green-dark)] mb-8">
              Kalispell • Whitefish • Columbia Falls • Bigfork • Lakeside •
              Somers • and surrounding areas
            </p>
            <p className="text-[var(--charcoal)]/70">
              Being local means I can meet you at your office, understand your
              specific situation, and be there when you need support. No ticket
              queues, no overseas call centers — just a real person who knows
              your business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--green-dark)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Talk About Your Business
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              No sales pitch, no pressure. Just a conversation about what's
              working and what could be better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:307-699-0064"
                className="inline-flex items-center justify-center gap-2 bg-white text-[var(--green-dark)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[var(--gold)] hover:text-white transition-colors"
              >
                <Phone className="h-6 w-6" />
                (307) 699-0064
              </a>
              <Link
                href="/free-assessment"
                className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[var(--green-dark)] transition-colors"
              >
                Get Free Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
