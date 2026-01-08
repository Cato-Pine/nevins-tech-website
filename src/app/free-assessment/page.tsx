import { Metadata } from 'next';
import { CheckCircle, Clock, Lightbulb, Target, Phone } from 'lucide-react';
import AssessmentForm from '@/components/AssessmentForm';

export const metadata: Metadata = {
  title: 'Free Tech Assessment',
  description:
    'Get a free technology assessment for your Flathead County business. We\'ll review your current setup and identify opportunities to save time and money.',
};

const whatYouGet = [
  {
    icon: Target,
    title: 'Current State Review',
    description:
      "We'll look at your existing tools, workflows, and pain points to understand where you are today.",
  },
  {
    icon: Lightbulb,
    title: 'Opportunity Identification',
    description:
      "I'll identify specific areas where automation, consolidation, or modernization could help.",
  },
  {
    icon: Clock,
    title: 'Time & Cost Savings',
    description:
      "You'll get a clear picture of potential time savings and cost reductions.",
  },
];

const whatItIncludes = [
  '30-minute conversation about your business',
  'Review of your current technology stack',
  'Identification of automation opportunities',
  'Assessment of your website performance',
  'Recommendations for quick wins',
  'Written summary of findings',
];

export default function FreeAssessmentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--green-dark)] to-[var(--green-mid)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Free Tech Assessment
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Not sure where to start? Let's figure it out together.
            </p>
            <p className="text-white/80">
              No sales pitch, no pressure — just honest advice about how
              technology could help your business.
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[var(--green-dark)]">What You'll Get</h2>
            <p className="text-lg text-[var(--charcoal)]/70 max-w-2xl mx-auto">
              A clear picture of your technology situation and practical
              recommendations — completely free.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whatYouGet.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-[var(--cream)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-[var(--gold)]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[var(--charcoal)]/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes + Form */}
      <section className="py-16 bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* What's Included */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <ul className="space-y-4">
                {whatItIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[var(--green-dark)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--charcoal)]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-white rounded-xl">
                <h3 className="font-semibold text-lg mb-2">
                  Why offer this for free?
                </h3>
                <p className="text-[var(--charcoal)]/70">
                  Simple: I'd rather have a real conversation about your
                  business than send you a generic proposal. Most businesses
                  have low-hanging fruit that can save them time and money. If
                  we're a good fit to work together, great. If not, you'll still
                  walk away with useful insights.
                </p>
              </div>

              <div className="mt-6 p-4 border border-[var(--gold)] rounded-lg">
                <p className="text-[var(--charcoal)]/70 text-sm">
                  <strong>Prefer to talk first?</strong> Call me at{' '}
                  <a
                    href="tel:307-699-0064"
                    className="text-[var(--green-dark)] font-medium"
                  >
                    (307) 699-0064
                  </a>{' '}
                  and we can schedule a time that works for you.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">
                Request Your Free Assessment
              </h2>
              <AssessmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* Phone CTA */}
      <section className="py-12 bg-[var(--green-dark)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <p className="text-white/80 text-lg mb-2">
              Want to skip the form? Just call:
            </p>
            <a
              href="tel:307-699-0064"
              className="inline-flex items-center gap-3 text-3xl sm:text-4xl font-bold hover:text-[var(--gold)] transition-colors"
            >
              <Phone className="h-8 w-8" />
              (307) 699-0064
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
