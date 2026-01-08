import Link from 'next/link';
import {
  Workflow,
  Brain,
  Layers,
  Globe,
  Code,
  Phone,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Stop doing the same tasks over and over. We connect your apps and automate the busywork.',
    href: '/services#automation',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description:
      'Put AI to work for your business. From chatbots to document processing, we make it practical.',
    href: '/services#ai',
  },
  {
    icon: Layers,
    title: 'SaaS Consolidation',
    description:
      "Paying for 10 different apps? We'll help you consolidate and cut costs without losing functionality.",
    href: '/services#saas',
  },
  {
    icon: Globe,
    title: 'Website Modernization',
    description:
      'Your website is your storefront. We make it fast, mobile-friendly, and easy to update.',
    href: '/services#websites',
  },
  {
    icon: Code,
    title: 'Custom Applications',
    description:
      "When off-the-shelf software doesn't fit, we build exactly what you need.",
    href: '/services#custom',
  },
];

const painPoints = [
  'Paying for a dozen different apps that barely talk to each other',
  'Entering the same data into multiple systems',
  'A website that looks like it was built in 2010',
  "Hearing about AI but not knowing where to start",
  'Waiting weeks for your big-city IT company to respond',
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--green-dark)] to-[var(--green-mid)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technology That Works for Flathead County Businesses
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Automation, AI, and custom solutions — without the big-city prices
              or jargon. Local expertise, real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/free-assessment"
                className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--green-dark)] transition-colors"
              >
                Get Your Free Tech Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:307-699-0064"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/30"
              >
                <Phone className="h-5 w-5" />
                (307) 699-0064
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sound Familiar?</h2>
            <p className="text-lg text-[var(--charcoal)]/70 max-w-2xl mx-auto">
              If you're dealing with any of these, you're not alone — and we can
              help.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-[var(--cream)] rounded-lg"
              >
                <CheckCircle className="h-6 w-6 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <p className="text-[var(--charcoal)]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Can Help</h2>
            <p className="text-lg text-[var(--charcoal)]/70 max-w-2xl mx-auto">
              We speak your language, not tech jargon. Here's what we do for
              businesses like yours.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <service.icon className="h-10 w-10 text-[var(--green-dark)] mb-4 group-hover:text-[var(--gold)] transition-colors" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-[var(--charcoal)]/70">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Trust Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Local Means Something</h2>
            <p className="text-lg text-[var(--charcoal)]/70 mb-8">
              We're not a faceless tech company in a distant city. We're your
              neighbors. We understand the Flathead Valley business community,
              and we're here when you need us — not on some call center's
              schedule.
            </p>
            <p className="text-[var(--green-dark)] font-semibold">
              Proudly serving Kalispell, Whitefish, Columbia Falls, Bigfork, and
              all of Flathead County.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--green-dark)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's have a conversation. No pressure, no jargon — just a quick
              chat about what's working and what's not.
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
                Schedule Free Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
