'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaChevronDown,
  FaCloud,
  FaCog,
  FaFileAlt,
  FaServer,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa';
import { FaqProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaCog':
      return <FaCog />;
    case 'FaServer':
      return <FaServer />;
    case 'FaUsers':
      return <FaUsers />;
    case 'FaCloud':
      return <FaCloud />;
    case 'FaFileAlt':
      return <FaFileAlt />;
    default:
      return null;
  }
};

export const Faq = ({ data }: FaqProps) => {
  const [activeId, setActiveId] = useState(data?.items[0]?.id ?? '');

  if (!data) return null;

  return (
    <section id="faq" className="relative w-full overflow-hidden bg-[var(--color-bg-section)] py-8 lg:py-12">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-6 lg:px-8">
        <div className="self-start lg:sticky lg:top-24">
          <div className="mb-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-primary)] text-xs text-[var(--color-primary)]">
                <FaShieldAlt />
              </span>
              <span className="text-xs font-bold tracking-[0.16em] text-[var(--color-primary)] sm:text-sm">
                {data.subtitle}
              </span>
              <span className="h-0.5 w-10 bg-[var(--color-primary)]" />
            </div>

            <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              {data.title1} <span className="block text-[var(--color-primary-dark)]">{data.title2}</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-text-light)] sm:text-base">
              {data.description}
            </p>
          </div>

          <div className="relative aspect-[16/8.5] overflow-hidden rounded-2xl border border-[var(--color-border-card)]">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 48vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-xl border border-[var(--color-primary)] bg-white/95 p-3.5 shadow-2xl backdrop-blur-md sm:left-5 sm:right-auto sm:min-w-80 sm:p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-darker)] text-lg text-white shadow-md">
                  <FaUsers />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{data.ctaTitle}</h3>
                  <p className="mt-0.5 text-xs text-slate-600">{data.ctaDescription}</p>
                </div>
              </div>

              <Link
                href={data.ctaButtonUrl}
                aria-label={data.ctaButtonLabel}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)] text-slate-900 transition-colors hover:bg-[var(--color-primary)] hover:text-white"
              >
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {data.items.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-xl border border-[var(--color-border-card)] bg-[var(--color-bg-card)]"
              >
                <button
                  type="button"
                  onClick={() => setActiveId(isOpen ? '' : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-answer`}
                  className="flex w-full items-center gap-4 px-4 py-3 text-left sm:px-5 sm:py-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-darker)] text-lg text-[var(--color-heading)]">
                    {renderIcon(item.icon)}
                  </span>
                  <span className="flex-1 text-sm font-bold text-[var(--color-heading)] sm:text-base">
                    {item.question}
                  </span>
                  <FaChevronDown
                    className={`shrink-0 text-sm text-[var(--color-heading)] transition-transform duration-500 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <div
                  id={`${item.id}-answer`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p
                      className={`border-t border-[var(--color-border-soft)] px-4 pb-5 pt-4 text-sm leading-relaxed text-[var(--color-text-light)] transition-opacity duration-300 sm:pl-20 sm:pr-8 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
