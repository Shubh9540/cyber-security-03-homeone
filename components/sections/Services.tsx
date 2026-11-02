import React from 'react';
import Link from 'next/link';
import {
  FaArrowRight,
  FaCloudUploadAlt,
  FaCogs,
  FaEye,
  FaFingerprint,
  FaLock,
  FaNetworkWired,
} from 'react-icons/fa';
import { ServiceCardProps, ServicesProps } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaNetworkWired':
      return <FaNetworkWired />;
    case 'FaLock':
      return <FaLock />;
    case 'FaFingerprint':
      return <FaFingerprint />;
    case 'FaEye':
      return <FaEye />;
    case 'FaCloudUploadAlt':
      return <FaCloudUploadAlt />;
    case 'FaCogs':
      return <FaCogs />;
    default:
      return null;
  }
};

export const ServiceCard = ({ service, linkText }: ServiceCardProps) => {
  return (
    <article className="group relative h-full min-h-64 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]">
      <div className="absolute inset-y-0 right-0 w-[50%] bg-[var(--color-primary)] [clip-path:polygon(24%_0,100%_0,100%_100%,24%_100%,0_48%)]">
        <div className="absolute inset-y-px right-px left-px overflow-hidden rounded-r-lg [clip-path:polygon(24%_0,100%_0,100%_100%,24%_100%,0_48%)]">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="relative z-10 flex h-full min-h-64 w-[58%] flex-col p-5 pr-8 pb-16 sm:p-6 sm:pr-9 sm:pb-16">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-2xl text-[var(--color-heading)] shadow-lg shadow-[var(--color-primary)]/20">
          {renderIcon(service.icon)}
        </div>

        <Link href={service.url} className="w-fit">
          <h3 className="mb-2 text-lg font-extrabold leading-tight text-[var(--color-heading)] transition-colors group-hover:text-[var(--color-primary)]">
            {service.title}
          </h3>
        </Link>

        <p className="text-sm leading-relaxed text-[var(--color-text-light)]">{service.description}</p>

        <Link
          href={service.url}
          className="absolute bottom-5 left-5 inline-flex w-fit items-center gap-3 text-sm font-bold text-[var(--color-heading)] transition-colors hover:text-[var(--color-primary)] sm:bottom-6 sm:left-6"
        >
          <span>{linkText}</span>
          <FaArrowRight className="text-[var(--color-primary)]" />
        </Link>
      </div>
    </article>
  );
};

export const Services = ({ data }: ServicesProps) => {
  if (!data) return null;

  return (
    <section id="services" className="relative w-full overflow-hidden bg-[var(--color-bg-section)] py-8 lg:py-12">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-primary)]/10" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-[var(--color-accent)]/5" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-5xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[var(--color-primary)]" />
            <span className="text-sm font-bold tracking-[0.16em] text-[var(--color-primary)]">{data.subtitle}</span>
            <span className="h-px w-10 bg-[var(--color-primary)]" />
          </div>

          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[var(--color-heading)] sm:text-3xl lg:text-4xl">
            {data.title1} <span className="text-[var(--color-primary)]">{data.title2}</span> {data.title3}
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-[var(--color-text-light)] sm:text-base">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service) => (
            <ServiceCard key={service.id} service={service} linkText={data.linkText} />
          ))}
        </div>
      </div>
    </section>
  );
};
