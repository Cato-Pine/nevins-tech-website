'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Nevins Tech"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-[var(--green-dark)] hidden sm:block">
              Nevins Tech
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--charcoal)] hover:text-[var(--green-dark)] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Phone + CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="tel:307-699-0064"
              className="flex items-center gap-2 text-[var(--green-dark)] font-semibold hover:text-[var(--gold)] transition-colors"
            >
              <Phone className="h-5 w-5" />
              (307) 699-0064
            </a>
            <Link
              href="/free-assessment"
              className="bg-[var(--gold)] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[var(--green-dark)] transition-colors"
            >
              Free Assessment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-[var(--charcoal)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--charcoal)] hover:text-[var(--green-dark)] font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:307-699-0064"
                className="flex items-center gap-2 text-[var(--green-dark)] font-semibold py-2"
              >
                <Phone className="h-5 w-5" />
                (307) 699-0064
              </a>
              <Link
                href="/free-assessment"
                className="bg-[var(--gold)] text-white px-5 py-2.5 rounded-lg font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Assessment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
