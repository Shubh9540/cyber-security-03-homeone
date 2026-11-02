import React from 'react';
import { FaChartBar, FaCog, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { AboutUsProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaShieldAlt':
      return <FaShieldAlt />;
    case 'FaUsers':
      return <FaUsers />;
    case 'FaCog':
      return <FaCog />;
    case 'FaChartBar':
      return <FaChartBar />;
    default:
      return null;
  }
};

export const AboutUs = ({ data }: AboutUsProps) => {
  if (!data) return null;

  return (
    <section id="about" className="w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8">
        <div className="grid min-h-[28rem] grid-cols-[minmax(0,2fr)_minmax(0,1fr)] grid-rows-2 gap-3 sm:min-h-[34rem] lg:min-h-[38rem]">
          <div className="row-span-2 overflow-hidden rounded-xl border border-[var(--color-primary)]/70 bg-[var(--color-bg-card)]">
            <img src={data.imageMain} alt={data.imageMainAlt} className="h-full w-full object-cover object-center" />
          </div>

          <div className="overflow-hidden rounded-xl border border-[var(--color-primary)]/70 bg-[var(--color-bg-card)]">
            <img src={data.imageTop} alt={data.imageTopAlt} className="h-full w-full object-cover object-center" />
          </div>

          <div className="overflow-hidden rounded-xl border border-[var(--color-primary)]/70 bg-[var(--color-bg-card)]">
            <img src={data.imageBottom} alt={data.imageBottomAlt} className="h-full w-full object-cover object-center" />
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-[var(--color-primary)]" />
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-primary)]">{data.subtitle}</span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
            <span className="block">{data.title1}</span>
            <span className="text-[var(--color-primary)]">{data.highlightedTitle}</span>
            {data.title2 && <span> {data.title2}</span>}
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--color-text-light)] sm:text-base">
            {data.description}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.features.map((feature) => (
              <article
                key={feature.id}
                className="flex min-h-28 items-center gap-4 rounded-xl border border-[var(--color-border-card)] bg-[var(--color-navy-overlay)]/55 p-4 transition-colors duration-300 hover:border-[var(--color-primary)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--color-primary)]/50 bg-[var(--color-primary-dark)] text-xl text-white">
                  {renderIcon(feature.icon)}
                </span>
                <span className="flex flex-col gap-1">
                  <strong className="text-sm font-semibold text-[var(--color-heading)] sm:text-base">{feature.title}</strong>
                  <span className="text-xs leading-5 text-[var(--color-text-light)] sm:text-sm">{feature.description}</span>
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
