'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function AssessmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission - replace with actual form handler
    // Options: Formspree, Netlify Forms, or custom API route
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-[var(--green-dark)] mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">You're All Set!</h3>
        <p className="text-[var(--charcoal)]/70 mb-4">
          Thanks for requesting your free assessment. I'll be in touch within 24
          hours to schedule our conversation.
        </p>
        <p className="text-sm text-[var(--charcoal)]/60">
          Can't wait? Call me at{' '}
          <a href="tel:307-699-0064" className="text-[var(--green-dark)] font-medium">
            (307) 699-0064
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--charcoal)] mb-2"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label
            htmlFor="business"
            className="block text-sm font-medium text-[var(--charcoal)] mb-2"
          >
            Business Name *
          </label>
          <input
            type="text"
            id="business"
            name="business"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none"
            placeholder="Smith & Co."
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--charcoal)] mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none"
            placeholder="john@smithco.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[var(--charcoal)] mb-2"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none"
            placeholder="(406) 555-1234"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="headache"
          className="block text-sm font-medium text-[var(--charcoal)] mb-2"
        >
          What's your biggest tech headache right now? *
        </label>
        <textarea
          id="headache"
          name="headache"
          rows={4}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none resize-none"
          placeholder="Tell me about what's frustrating you or what you wish worked better..."
        />
      </div>

      <div>
        <label
          htmlFor="website"
          className="block text-sm font-medium text-[var(--charcoal)] mb-2"
        >
          Website URL (optional)
        </label>
        <input
          type="url"
          id="website"
          name="website"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none"
          placeholder="https://yourwebsite.com"
        />
        <p className="text-xs text-[var(--charcoal)]/60 mt-1">
          If you have a website, I'll include a quick review in your assessment.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-[var(--gold)] text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--green-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          'Submitting...'
        ) : (
          <>
            Get My Free Assessment
            <Send className="h-5 w-5" />
          </>
        )}
      </button>

      <p className="text-xs text-[var(--charcoal)]/60 text-center">
        Your information is private and will never be shared or sold.
      </p>
    </form>
  );
}
