'use client';

import React, { useState } from 'react';
import {
  FaArrowRight,
  FaBriefcase,
  FaChevronDown,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCommentDots,
  FaUser,
} from 'react-icons/fa';
import { ContactProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    default: return null;
  }
};

export const Contact = ({ data }: ContactProps) => {
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  return (
    <>
      <section id="contact" className="w-full bg-[var(--color-bg-main)] py-8 lg:py-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-10 bg-[var(--color-primary)]" />
              <span className="text-xs font-bold tracking-[0.18em] text-[var(--color-heading)]">{data.intro.eyebrow}</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold leading-snug text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              <span className="block">{data.intro.title}</span>
              <span className="block text-[var(--color-primary)]">{data.intro.titleHighlight}</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-text-light)] sm:text-base">{data.intro.description}</p>

            <div className="mt-6 space-y-3">
              {data.contactPanel.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-dark)] text-xl text-white">{renderIcon(item.icon)}</span>
                  <div>
                    <h2 className="text-sm font-bold text-[var(--color-heading)] sm:text-base">{item.title}</h2>
                    {item.lines.map((line) => <p key={line.id} className="mt-1 text-sm text-[var(--color-text-light)]">{line.text}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[var(--color-primary)] bg-[var(--color-bg-card)] p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-10 bg-[var(--color-primary)]" />
              <span className="text-xs font-bold tracking-[0.18em] text-[var(--color-heading)]">{data.form.eyebrow}</span>
            </div>
            <h2 className="mt-4 text-2xl font-extrabold leading-snug text-[var(--color-heading)] sm:text-3xl">
              {data.form.title} <span className="text-[var(--color-primary)]">{data.form.titleHighlight}</span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-text-light)]">{data.form.helperText}</p>

            <form
              className="mt-5 space-y-3"
              onChange={() => setSubmitted(false)}
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                event.currentTarget.reset();
              }}
            >
              <label className="relative block">
                <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]" />
                <input name="fullName" type="text" required placeholder={data.form.fullNamePlaceholder} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-main)] py-3 pl-12 pr-4 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)]" />
              </label>
              <label className="relative block">
                <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]" />
                <input name="email" type="email" required placeholder={data.form.emailPlaceholder} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-main)] py-3 pl-12 pr-4 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)]" />
              </label>
              <label className="relative block">
                <FaPhoneAlt className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]" />
                <input name="phone" type="tel" required placeholder={data.form.phonePlaceholder} className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-main)] py-3 pl-12 pr-4 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)]" />
              </label>
              <label className="relative block">
                <FaBriefcase className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-light)]" />
                <select name="service" required defaultValue="" className="w-full appearance-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-main)] py-3 pl-12 pr-10 text-sm text-[var(--color-text-light)] outline-none transition-colors focus:border-[var(--color-primary)]">
                  <option value="" disabled>{data.form.servicePlaceholder}</option>
                  {data.form.servicesList.map((service) => <option key={service.id} value={service.value}>{service.label}</option>)}
                </select>
                <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[var(--color-text-light)]" />
              </label>
              <label className="relative block">
                <FaRegCommentDots className="pointer-events-none absolute left-4 top-4 text-[var(--color-text-light)]" />
                <textarea name="message" required rows={4} placeholder={data.form.messagePlaceholder} className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-main)] py-3 pl-12 pr-4 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)]" />
              </label>
              <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                {data.form.buttonText}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--color-primary)]"><FaArrowRight /></span>
              </button>
              {submitted && <p role="status" className="rounded-lg border border-[var(--color-success-border)] bg-[var(--color-success-bg)] px-4 py-3 text-sm font-semibold text-[var(--color-success-text)]">{data.form.successMessage}</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="w-full bg-[var(--color-bg-main)]">
        <iframe src={data.location.mapUrl} title={data.location.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0 sm:h-96 lg:h-[32rem]" />
      </section>
    </>
  );
};
