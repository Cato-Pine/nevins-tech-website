import Link from 'next/link';
import Image from 'next/image';
import {
  Workflow,
  Brain,
  Layers,
  Globe,
  Code,
  Phone,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Shield,
} from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'Stop doing the same tasks over and over. We connect your apps and automate the busywork.',
    href: '/services#automation',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description:
      'Put AI to work for your business. From chatbots to document processing, we make it practical.',
    href: '/services#ai',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Layers,
    title: 'SaaS Consolidation',
    description:
      "Paying for 10 different apps? We'll help you consolidate and cut costs without losing functionality.",
    href: '/services#saas',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Globe,
    title: 'Website Modernization',
    description:
      'Your website is your storefront. We make it fast, mobile-friendly, and easy to update.',
    href: '/services#websites',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Code,
    title: 'Custom Applications',
    description:
      "When off-the-shelf software doesn't fit, we build exactly what you need.",
    href: '/services#custom',
    color: 'from-rose-500 to-pink-600',
  },
];

const painPoints = [
  { text: 'Paying for a dozen different apps that barely talk to each other', icon: Layers },
  { text: 'Entering the same data into multiple systems', icon: Zap },
  { text: 'A website that looks like it was built in 2010', icon: Globe },
  { text: "Hearing about AI but not knowing where to start", icon: Brain },
  { text: 'Waiting weeks for your big-city IT company to respond', icon: Shield },
];

const stats = [
  { value: '50+', label: 'Hours Saved Monthly', sublabel: 'per client on average' },
  { value: '30%', label: 'Cost Reduction', sublabel: 'in software expenses' },
  { value: '24hr', label: 'Response Time', sublabel: 'for support requests' },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--green-dark)] via-[var(--green-mid)] to-[var(--green-dark)] text-white mountain-bg hero-pattern animate-gradient">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-6">
                <Sparkles className="h-4 w-4 text-[var(--gold)]" />
                <span>Serving Flathead County businesses</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Technology That{' '}
                <span className="gradient-text">Actually Works</span>{' '}
                for Your Business
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Automation, AI, and custom solutions — without the big-city prices
                or jargon. Local expertise, real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/free-assessment"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-[var(--green-dark)] px-8 py-4 rounded-xl font-semibold shadow-elevated hover:shadow-2xl hover:scale-105 transition-all duration-300 btn-glow"
                >
                  Get Your Free Tech Assessment
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:307-699-0064"
                  className="inline-flex items-center justify-center gap-2 glass text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  (307) 699-0064
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center animate-fade-in-up stagger-2">
              <div className="relative">
                <div className="absolute inset-0 bg-[var(--gold)]/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                  <Image
                    src="/logo.png"
                    alt="Nevins Tech"
                    width={300}
                    height={300}
                    className="animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[var(--green-dark)] mb-1">{stat.value}</div>
                <div className="text-lg font-semibold text-[var(--charcoal)]">{stat.label}</div>
                <div className="text-sm text-[var(--charcoal)]/60">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white grid-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-divider pb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--green-dark)]">
              Sound Familiar?
            </h2>
            <p className="text-lg text-[var(--charcoal)]/70 max-w-2xl mx-auto">
              If you're dealing with any of these, you're not alone — and we can help.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 bg-gradient-to-br from-white to-[var(--cream)] rounded-2xl border border-gray-100 shadow-soft card-hover"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--green-dark)]/10 flex items-center justify-center group-hover:bg-[var(--gold)]/20 transition-colors">
                  <point.icon className="h-6 w-6 text-[var(--green-dark)] group-hover:text-[var(--gold)] transition-colors" />
                </div>
                <p className="text-[var(--charcoal)] font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-[var(--cream)] to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 section-divider pb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--green-dark)]">
              How We Can Help
            </h2>
            <p className="text-lg text-[var(--charcoal)]/70 max-w-2xl mx-auto">
              We speak your language, not tech jargon. Here's what we do for businesses like yours.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-white p-8 rounded-2xl shadow-soft card-hover overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--green-dark)] group-hover:text-[var(--gold)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--charcoal)]/70 leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center text-[var(--gold)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local Trust Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--green-dark)]/5 via-[var(--gold)]/5 to-[var(--green-dark)]/5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-elevated text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--green-dark)]/10 mb-6">
                <Shield className="h-8 w-8 text-[var(--green-dark)]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--green-dark)]">
                Local Means Something
              </h2>
              <p className="text-lg text-[var(--charcoal)]/80 mb-8 leading-relaxed">
                We're not a faceless tech company in a distant city. We're your neighbors.
                We understand the Flathead Valley business community, and we're here when
                you need us — not on some call center's schedule.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3">
                {['Kalispell', 'Whitefish', 'Columbia Falls', 'Bigfork', 'Lakeside'].map((city) => (
                  <span
                    key={city}
                    className="px-4 py-2 bg-[var(--cream)] rounded-full text-[var(--green-dark)] font-medium text-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--green-dark)] via-[var(--green-mid)] to-[var(--green-dark)] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's have a conversation. No pressure, no jargon — just a quick
              chat about what's working and what's not.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:307-699-0064"
                className="group inline-flex items-center justify-center gap-2 bg-white text-[var(--green-dark)] px-8 py-4 rounded-xl font-bold text-lg shadow-elevated hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Phone className="h-6 w-6" />
                (307) 699-0064
              </a>
              <Link
                href="/free-assessment"
                className="group inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-[var(--green-dark)] px-8 py-4 rounded-xl font-bold text-lg shadow-elevated hover:shadow-2xl hover:scale-105 transition-all duration-300 btn-glow"
              >
                Schedule Free Assessment
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
