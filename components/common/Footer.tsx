import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaAngleRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FooterProps } from '@/types/templates.types';

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaLinkedinIn':
      return <FaLinkedinIn />;
    case 'FaXTwitter':
      return <FaXTwitter />;
    default:
      return null;
  }
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="relative w-full overflow-hidden bg-[var(--color-navy-darker)]">
      <Image
        src={data.backgroundImage}
        alt={data.backgroundImageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center opacity-100"
      />
      <div className="absolute inset-0 bg-[#050b14]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/85 via-[#050b14]/50 to-[#050b14]/40" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1.5fr_1.1fr] lg:gap-12 lg:px-8 lg:py-12">
        <div className="lg:pr-4">
          <Link href={data.logoUrl} className="inline-block" aria-label={data.logoAlt}>
            <Image
              src={data.logo}
              alt={data.logoAlt}
              width={360}
              height={120}
              className="h-auto w-72 max-w-full object-contain"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-100 sm:text-base [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)]">
            {data.description}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)]">{data.quickLinksTitle}</h2>
          <span className="mt-3 block h-0.5 w-9 bg-[var(--color-primary)]" />
          <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
            {data.quickLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className="flex items-center justify-between gap-3 py-1.5 text-sm font-medium text-slate-100 transition-colors hover:text-[var(--color-primary)] [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)]"
                >
                  {link.label}
                  <FaAngleRight className="shrink-0 text-slate-300" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)]">{data.contactTitle}</h2>
          <span className="mt-3 block h-0.5 w-9 bg-[var(--color-primary)]" />

          <ul className="mt-4 space-y-4">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-dark)] text-white">
                <FaPhoneAlt />
              </span>
              <Link href={`tel:${data.contactInfo.phone}`} className="text-sm text-white hover:text-[var(--color-primary)]">
                {data.contactInfo.phone}
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-dark)] text-white">
                <FaEnvelope />
              </span>
              <Link href={`mailto:${data.contactInfo.email}`} className="text-sm text-white hover:text-[var(--color-primary)]">
                {data.contactInfo.email}
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-dark)] text-white">
                <FaMapMarkerAlt />
              </span>
              <span className="pt-1 text-sm leading-relaxed text-white">{data.contactInfo.address}</span>
            </li>
          </ul>

          <div className="mt-5 border-t border-[var(--color-primary)] pt-4">
            <h2 className="text-lg font-bold text-white">{data.followUsTitle}</h2>
            <span className="mt-3 block h-0.5 w-9 bg-[var(--color-primary)]" />
            <div className="mt-4 flex flex-wrap gap-3">
              {data.socialLinks.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-primary)] text-sm text-white transition-colors hover:bg-[var(--color-primary)]"
                >
                  {renderSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[var(--color-primary)]/50">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white sm:px-6 sm:text-sm lg:px-8">
          {data.copyrightText}
        </p>
      </div>
    </footer>
  );
};
