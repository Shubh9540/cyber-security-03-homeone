import React from 'react';
import Image from 'next/image';
import { FaChartLine, FaCloud, FaShieldAlt, FaUserLock } from 'react-icons/fa';
import { WhyChooseUsProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaUserLock':
      return <FaUserLock />;
    case 'FaCloud':
      return <FaCloud />;
    case 'FaChartLine':
      return <FaChartLine />;
    default:
      return null;
  }
};

export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  if (!data) return null;

  return (
    <section id="why-choose-us" className="relative w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-primary)]/5" />

      <div className="relative z-10 w-full">
        <div className="mx-auto mb-8 max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[var(--color-primary)]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-primary)] sm:text-sm">
              {data.subtitle}
            </span>
            <span className="h-px w-10 bg-[var(--color-primary)]" />
          </div>

          <h2 className="text-2xl font-extrabold leading-tight text-[var(--color-heading)] sm:text-3xl lg:text-4xl">
            {data.title1} <span className="text-[var(--color-primary-dark)]">{data.title2}</span>
          </h2>

          <p className="mx-auto mt-3 max-w-4xl text-sm leading-relaxed text-[var(--color-text-light)] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 px-4 sm:px-6 lg:grid-cols-[0.95fr_2fr] lg:gap-4 lg:px-0 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-8">
          <div className="relative min-h-72 bg-[var(--color-primary)] [clip-path:polygon(0_0,88%_16%,100%_50%,88%_100%,0_90%)] lg:min-h-full">
            <div className="absolute inset-px overflow-hidden [clip-path:polygon(0_0,88%_16%,100%_50%,88%_100%,0_90%)]">
              <Image
                src={data.imageMain}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 34vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--color-bg-main)]/10" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:pr-8 2xl:pr-0">
            {data.features.map((feature) => (
              <article
                key={feature.id}
                className="group relative min-h-48 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] transition-colors duration-300 hover:border-[var(--color-primary)]"
              >
                <div className="absolute inset-y-0 right-0 w-[43%] bg-[var(--color-primary)] [clip-path:polygon(24%_0,100%_0,100%_100%,24%_100%,0_50%)]">
                  <div className="absolute inset-y-px right-px left-px overflow-hidden rounded-r-lg [clip-path:polygon(24%_0,100%_0,100%_100%,24%_100%,0_50%)]">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      sizes="(max-width: 767px) 43vw, (max-width: 1023px) 22vw, 15vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="relative z-10 flex min-h-48 w-[62%] flex-col p-4 pr-7 sm:p-5 sm:pr-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-4xl font-extrabold leading-none text-[var(--color-primary)]/20">
                      {feature.number}
                    </span>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-lg text-white shadow-sm">
                      {renderIcon(feature.icon)}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold leading-tight text-[var(--color-heading)] sm:text-lg">
                    {feature.title}
                  </h3>
                  <span className="my-2 h-0.5 w-8 bg-[var(--color-primary)]" />
                  <p className="text-xs leading-relaxed text-[var(--color-text-light)] sm:text-sm">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
