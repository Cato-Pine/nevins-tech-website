import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Nevins Tech for technology consulting in Flathead County. Call, email, or fill out our contact form.',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--green-dark)] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let's Talk
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have a question or want to discuss your technology needs? I'm here
              to help.
            </p>
          </div>
        </div>
      </section>

      {/* Phone CTA */}
      <section className="py-12 bg-[var(--gold)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/90 text-lg mb-2">
              The fastest way to reach me:
            </p>
            <a
              href="tel:307-699-0064"
              className="inline-flex items-center gap-3 text-white text-4xl sm:text-5xl font-bold hover:underline"
            >
              <Phone className="h-10 w-10" />
              (307) 699-0064
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-[var(--gold)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:307-699-0064"
                      className="text-[var(--green-dark)] hover:text-[var(--green-mid)] text-lg font-medium underline decoration-transparent hover:decoration-current transition-all"
                    >
                      (307) 699-0064
                    </a>
                    <p className="text-[var(--charcoal)]/70 text-sm mt-1">
                      Call or text anytime
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-[var(--gold)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:justin@nevinstech.com"
                      className="text-[var(--green-dark)] hover:text-[var(--green-mid)] text-lg font-medium underline decoration-transparent hover:decoration-current transition-all"
                    >
                      justin@nevinstech.com
                    </a>
                    <p className="text-[var(--charcoal)]/70 text-sm mt-1">
                      I typically respond within a few hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-[var(--gold)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Service Area</h3>
                    <p className="text-[var(--charcoal)]">
                      Flathead County, Montana
                    </p>
                    <p className="text-[var(--charcoal)]/70 text-sm mt-1">
                      Kalispell, Whitefish, Columbia Falls, Bigfork, and
                      surrounding areas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-[var(--gold)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-[var(--charcoal)]">
                      Monday - Friday: 8am - 6pm
                    </p>
                    <p className="text-[var(--charcoal)]/70 text-sm mt-1">
                      Available for emergencies outside normal hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Free Assessment CTA */}
              <div className="mt-8 p-6 bg-[var(--cream)] rounded-xl">
                <h3 className="font-semibold text-lg mb-2">
                  Not sure what you need?
                </h3>
                <p className="text-[var(--charcoal)]/70 mb-4">
                  Start with a free tech assessment. We'll review your current
                  setup and identify opportunities to save time and money.
                </p>
                <Link
                  href="/free-assessment"
                  className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold hover:text-[var(--green-dark)]"
                >
                  Get Your Free Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
