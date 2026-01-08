'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
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
      <div className="bg-[var(--cream)] p-8 rounded-xl text-center">
        <CheckCircle className="h-12 w-12 text-[var(--green-dark)] mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-[var(--charcoal)]/70">
          Thanks for reaching out. I'll get back to you within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--charcoal)] mb-2"
        >
          Your Name
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
          htmlFor="email"
          className="block text-sm font-medium text-[var(--charcoal)] mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[var(--charcoal)] mb-2"
        >
          Phone Number (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none"
          placeholder="(406) 555-1234"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--charcoal)] mb-2"
        >
          How Can I Help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent outline-none resize-none"
          placeholder="Tell me about your business and what you're looking to improve..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-[var(--gold)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--green-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="h-5 w-5" />
          </>
        )}
      </button>

      <p className="text-sm text-[var(--charcoal)]/60 text-center">
        Or call me directly at{' '}
        <a href="tel:307-699-0064" className="text-[var(--green-dark)] font-medium">
          (307) 699-0064
        </a>
      </p>
    </form>
  );
}
