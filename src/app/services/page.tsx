import { Metadata } from 'next';
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
  Zap,
  Clock,
  DollarSign,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Workflow automation, AI integration, SaaS consolidation, website modernization, and custom applications for Flathead County businesses.',
};

const services = [
  {
    id: 'automation',
    icon: Workflow,
    title: 'Workflow Automation',
    tagline: 'Stop doing the same tasks over and over',
    description:
      "You've got better things to do than copy data between spreadsheets or send the same emails manually. We connect your tools and automate the repetitive stuff so you can focus on what actually matters.",
    benefits: [
      'Automatic data sync between your apps',
      'Scheduled reports that send themselves',
      'Lead follow-ups that happen instantly',
      'Invoice and payment reminders on autopilot',
    ],
    examples: [
      'New customer signs up → automatically added to your CRM, email list, and invoicing system',
      'Order comes in → inventory updated, shipping label created, customer notified',
      'Appointment booked → calendar blocked, reminder texts scheduled, intake form sent',
    ],
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Integration',
    tagline: 'Put AI to work for your business',
    description:
      "AI isn't just for big tech companies. We help local businesses use practical AI tools that save time and improve customer service — without the complexity or massive budgets.",
    benefits: [
      'Chatbots that actually help customers',
      'Automatic document processing',
      'Smart email sorting and responses',
      'Content generation assistance',
    ],
    examples: [
      'Customer service chatbot that handles FAQs 24/7 and escalates when needed',
      'AI that reads invoices and enters data into your accounting system',
      'Smart assistant that drafts email responses for you to review and send',
    ],
  },
  {
    id: 'saas',
    icon: Layers,
    title: 'SaaS Consolidation',
    tagline: 'Stop paying for apps you barely use',
    description:
      "Most businesses are paying for way more software than they need. We audit your tech stack, find the overlap, and help you consolidate — cutting costs while keeping the functionality you actually use.",
    benefits: [
      'Reduce monthly software costs',
      'Fewer logins and passwords to manage',
      'Data in fewer places means less confusion',
      'Training on fewer tools',
    ],
    examples: [
      'Replace 5 separate tools with one platform that does it all',
      'Migrate from expensive enterprise software to modern alternatives',
      'Set up integrations so existing tools talk to each other better',
    ],
  },
  {
    id: 'websites',
    icon: Globe,
    title: 'Website Modernization',
    tagline: 'Your website is your digital storefront',
    description:
      "If your website is slow, hard to update, or looks like it was built a decade ago, it's costing you customers. We build fast, modern sites that look great on phones and are easy for you to maintain.",
    benefits: [
      'Fast loading on any device',
      'Easy to update without calling a developer',
      'Better Google rankings',
      'Professional appearance that builds trust',
    ],
    examples: [
      'Rebuild your site to load in under 2 seconds',
      'Add online booking, contact forms, or payment processing',
      'Create a content system where you can easily post updates',
    ],
  },
  {
    id: 'custom',
    icon: Code,
    title: 'Custom Applications',
    tagline: 'Built exactly for how you work',
    description:
      "Sometimes off-the-shelf software just doesn't fit. When you need something specific to your business, we build it — internal tools, customer portals, mobile apps, whatever solves your problem.",
    benefits: [
      'Software that fits your workflow, not the other way around',
      'No per-user licensing fees',
      'Full control and ownership',
      'Can evolve as your business grows',
    ],
    examples: [
      'Customer portal where clients can track their orders and upload documents',
      'Internal dashboard that shows all your key metrics in one place',
      'Mobile app for your field team to log work and sync with the office',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--green-dark)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              How We Help Flathead County Businesses
            </h1>
            <p className="text-xl text-white/90">
              No jargon, no fluff. Just practical technology solutions that save
              you time and money.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="h-10 w-10 text-[var(--gold)]" />
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-xl text-[var(--gold)] font-medium mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-lg text-[var(--charcoal)]/80 mb-6">
                    {service.description}
                  </p>
                  <h3 className="font-semibold text-lg mb-3">What you get:</h3>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[var(--green-dark)] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`bg-[var(--cream)] p-6 rounded-xl ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <h3 className="font-semibold text-lg mb-4">Real examples:</h3>
                  <ul className="space-y-4">
                    {service.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-start gap-3 text-[var(--charcoal)]/80"
                      >
                        <Zap className="h-5 w-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[var(--green-dark)]">How We Work</h2>
            <p className="text-lg text-[var(--charcoal)]/70 max-w-2xl mx-auto">
              No long contracts or surprise bills. Here's what working with us
              looks like.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Free Chat</h3>
              <p className="text-[var(--charcoal)]/70">
                We talk about what's working, what's not, and where you want to
                be. No sales pitch.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">2. Clear Proposal</h3>
              <p className="text-[var(--charcoal)]/70">
                You get a straightforward proposal with fixed pricing. No hourly
                surprises.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">3. We Deliver</h3>
              <p className="text-[var(--charcoal)]/70">
                We build, you review, we refine. You don't pay until you're
                happy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--green-dark)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Modernize Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's talk about what's possible. Start with a free tech
              assessment.
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
