'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import { TestimonialsProps } from '@/types/templates.types';

export const Testimonials = ({ data }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!data?.testimonials.length) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % data.testimonials.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [data]);

  if (!data?.testimonials.length) return null;

  const activeTestimonial = data.testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + data.testimonials.length) % data.testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % data.testimonials.length);
  };

  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-0">
          <div>
            <div className="mb-7 max-w-xl">
              <div className="mb-4 flex items-center gap-4">
                <span className="h-0.5 w-10 bg-[var(--color-primary)]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-primary)] sm:text-sm">
                  {data.subtitle}
                </span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
                {data.title1} <span className="text-[var(--color-primary-dark)]">{data.title2}</span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-text-light)] sm:text-base">
                {data.description}
              </p>
            </div>

            <div className="relative aspect-[16/8.5] overflow-hidden rounded-2xl border border-[var(--color-border-card)]">
              <Image
                src={data.videoImage}
                alt={data.videoImageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[var(--color-bg-main)]/20" />
            </div>
          </div>

          <article className="relative min-h-[25rem] overflow-hidden rounded-3xl border border-[var(--color-primary-dark)] bg-[var(--color-bg-card)] p-6 shadow-2xl sm:p-8 lg:-ml-6 lg:mb-0 lg:p-10">
            <FaQuoteRight
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 right-5 text-9xl text-[var(--color-primary)]/10"
            />

            <div className="relative z-10 flex items-start justify-between gap-5">
              <FaQuoteLeft className="text-5xl text-[var(--color-primary)]" />

              <div className="flex flex-col items-end gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label={data.previousLabel}
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--color-text-light)] text-[var(--color-heading)] transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label={data.nextLabel}
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--color-primary)] text-[var(--color-heading)] transition-colors hover:bg-[var(--color-primary)]"
                  >
                    <FaArrowRight />
                  </button>
                </div>

                <div className="flex max-w-40 flex-wrap justify-end gap-2">
                  {data.testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`${data.slideLabel} ${index + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${
                        activeIndex === index
                          ? 'bg-[var(--color-primary)]'
                          : 'bg-[var(--color-border-cool)]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div key={activeTestimonial.id} className="relative z-10 mt-5">
              <p className="min-h-36 text-base leading-8 text-[var(--color-heading)] sm:text-lg">
                {activeTestimonial.quote}
              </p>

              <span className="my-5 block h-0.5 w-14 bg-[var(--color-primary)]" />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[var(--color-heading)] bg-[var(--color-bg-main)]">
                  <Image
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-[var(--color-heading)]">{activeTestimonial.name}</h3>
                  <p className="text-sm text-[var(--color-text-light)]">{activeTestimonial.location}</p>
                  <div className="mt-2 flex gap-1 text-[var(--color-warning)]">
                    {Array.from({ length: activeTestimonial.rating }, (_, index) => (
                      <FaStar key={`${activeTestimonial.id}-star-${index}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
