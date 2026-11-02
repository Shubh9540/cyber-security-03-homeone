'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HeaderProps } from '@/types/templates.types';

export const Header = ({ data }: HeaderProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!data) return null;

  const isLinkActive = (url: string) => {
    const route = url.split('#')[0];

    if (url === '/') return pathname === '/';
    if (route === '/') return false;
    return pathname.startsWith(route);
  };

  return (
    <header className="relative z-50 w-full border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] shadow-lg shadow-[var(--color-shadow)]">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <img src={data.logo} alt={data.logoAlt} className="h-12 w-auto object-contain sm:h-14 lg:h-16" />
        </Link>

        <nav className="hidden h-full flex-1 items-center justify-center gap-7 lg:flex xl:gap-10">
          {data.navLinks.map((link) => {
            const isActive = isLinkActive(link.url);

            return (
              <Link
                key={link.id}
                href={link.url}
                className={`relative flex h-full items-center text-sm font-medium transition-colors duration-300 ${isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-heading)] hover:text-[var(--color-primary)]'}`}
              >
                {link.label}
                {isActive && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[var(--color-primary)]" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={data.contactButton.url}
            className="hidden items-center justify-center rounded-lg bg-[var(--color-accent)] px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--color-primary-dark)] lg:flex"
          >
            {data.contactButton.text}
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            aria-label={mobileMenuOpen ? data.closeMenuLabel : data.openMenuLabel}
            aria-expanded={mobileMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--color-border-light)] text-xl text-[var(--color-heading)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] lg:hidden"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] p-4 shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            {data.navLinks.map((link) => {
              const isActive = isLinkActive(link.url);

              return (
                <Link
                  key={link.id}
                  href={link.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`border-b border-[var(--color-border-subtle)] px-3 py-4 text-sm font-medium transition-colors ${isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-heading)] hover:text-[var(--color-primary)]'}`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href={data.contactButton.url}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-5 flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              {data.contactButton.text}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
