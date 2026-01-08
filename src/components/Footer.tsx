import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Workflow Automation', href: '/services#automation' },
    { name: 'AI Integration', href: '/services#ai' },
    { name: 'SaaS Consolidation', href: '/services#saas' },
    { name: 'Website Modernization', href: '/services#websites' },
    { name: 'Custom Applications', href: '/services#custom' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--green-dark)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Nevins Tech"
                width={40}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-lg font-bold">Nevins Tech</span>
            </Link>
            <p className="text-white/80 text-sm mb-4">
              Technology solutions for Flathead County businesses. Automation, AI, and custom applications without the big-city prices.
            </p>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>Serving Flathead County, MT</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-[var(--gold)] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-[var(--gold)] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:307-699-0064"
                  className="flex items-center gap-2 text-white hover:text-[var(--gold)] transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">(307) 699-0064</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:justin@nevinstech.com"
                  className="flex items-center gap-2 text-white/80 hover:text-[var(--gold)] transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>justin@nevinstech.com</span>
                </a>
              </li>
            </ul>
            <Link
              href="/free-assessment"
              className="inline-block mt-4 bg-[var(--gold)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-[var(--green-dark)] transition-colors text-sm"
            >
              Free Tech Assessment
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-center text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Nevins Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
