'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { HeroProps } from '@/types/templates.types';

export const Hero = ({ data }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = data?.slides.length ?? 0;

  const showNextSlide = useCallback(() => {
    if (slideCount < 2) return;
    setCurrentSlide((current) => (current + 1) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    if (!data || isPaused || slideCount < 2) return;

    const timer = window.setTimeout(showNextSlide, data.autoplayDelay);
    return () => window.clearTimeout(timer);
  }, [currentSlide, data, isPaused, showNextSlide, slideCount]);

  if (!data || slideCount === 0) return null;

  return (
    <section
      id="hero"
      className="relative flex min-h-[38rem] w-full items-center overflow-hidden bg-[var(--color-navy-deep)] sm:min-h-[40rem] lg:min-h-[calc(100vh-5rem)] lg:max-h-[48rem]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {data.slides.map((slide, index) => (
        <div
          key={slide.id}
          aria-hidden={index !== currentSlide}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out motion-reduce:transition-none ${index === currentSlide ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
          <img
            src={slide.image}
            alt={index === currentSlide ? slide.imageAlt : ''}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[var(--color-navy-deep)]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy-darker)] via-[var(--color-navy-deep)]/55 to-transparent" />
        </div>
      ))}

      <div className="relative z-20 mx-auto flex w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          <div className="grid">
            {data.slides.map((slide, index) => (
              <div
                key={slide.id}
                aria-hidden={index !== currentSlide}
                className={`col-start-1 row-start-1 transition-all duration-700 ease-out motion-reduce:transition-none ${index === currentSlide ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'}`}
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="h-0.5 w-10 bg-[var(--color-primary)] sm:w-12" />
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-light-muted)] sm:text-sm">
                    {slide.eyebrow}
                  </p>
                </div>

                <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="block">{slide.titleStart}</span>
                  <span className="block">
                    <span className="text-[var(--color-primary)]">{slide.highlightedTitle}</span> {slide.titleEnd}
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--color-text-light-muted)] sm:text-base">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-3" role="group" aria-label={data.slideNavigationLabel}>
            {data.slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`${data.goToSlideLabel} ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : undefined}
                className={`h-3 w-3 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-navy-deep)] ${index === currentSlide ? 'scale-110 border-[var(--color-primary)] bg-[var(--color-primary)]' : 'border-[var(--color-border-light)] bg-[var(--color-navy-medium)] hover:border-[var(--color-primary)]'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
