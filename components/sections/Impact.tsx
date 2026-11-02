'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaAward, FaServer, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { ImpactCounterProps, ImpactProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaUsers':
      return <FaUsers />;
    case 'FaServer':
      return <FaServer />;
    case 'FaAward':
      return <FaAward />;
    default:
      return null;
  }
};

export const ImpactCounter = ({ value, start }: ImpactCounterProps) => {
  const targetValue = Number.parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[\d,]/g, '');
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!start || Number.isNaN(targetValue)) return;

    let animationFrame = 0;
    let startTime = 0;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / 1800, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCurrentValue(Math.round(targetValue * easedProgress));

      if (progress < 1) animationFrame = window.requestAnimationFrame(updateCounter);
    };

    animationFrame = window.requestAnimationFrame(updateCounter);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [start, targetValue]);

  return (
    <>
      {currentValue}
      {suffix}
    </>
  );
};

export const Impact = ({ data }: ImpactProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [startCounters, setStartCounters] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStartCounters(true);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  if (!data) return null;

  return (
    <section id="impact" ref={sectionRef} className="relative min-h-[28rem] w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <Image
        src={data.backgroundImage}
        alt={data.backgroundImageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#050b14]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b14]/90 via-[#050b14]/65 to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[22rem] w-full max-w-7xl grid-cols-1 items-end gap-6 px-4 sm:px-6 lg:grid-cols-[0.8fr_2fr] lg:gap-8 lg:px-8">
        <div className="pb-2">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[var(--color-primary)]" />
            <span className="text-xs font-bold tracking-[0.16em] text-[var(--color-primary)] sm:text-sm">
              {data.subtitle}
            </span>
          </div>

          <h2 className="max-w-sm text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {data.title1} <span className="text-[var(--color-primary)]">{data.title2}</span>
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300 sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0a1220]/80 shadow-2xl backdrop-blur-md md:grid-cols-4">
          {data.stats.map((stat) => (
            <article
              key={stat.id}
              className="relative flex flex-col items-center border-b border-r border-white/10 px-3 py-5 text-center [&:nth-child(2n)]:border-r-0 [&:nth-child(n+3)]:border-b-0 sm:px-5 md:border-b-0 md:border-r-0 md:border-l md:first:border-l-0"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[var(--color-primary)]/40 bg-[#050b14] shadow-lg shadow-[var(--color-primary)]/20">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-darker)] text-2xl text-white">
                  {renderIcon(stat.icon)}
                </div>
              </div>

              <strong className="text-2xl font-extrabold text-white sm:text-3xl">
                <ImpactCounter value={stat.value} start={startCounters} />
              </strong>
              <span className="mt-1 text-xs text-slate-300 sm:text-sm">{stat.label}</span>
              <span className="mt-4 h-0.5 w-8 bg-[var(--color-primary)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
