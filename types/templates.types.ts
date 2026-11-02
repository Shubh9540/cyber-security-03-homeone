export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: HeaderNavLink[];
  contactButton: { text: string; url: string };
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  titleStart: string;
  highlightedTitle: string;
  titleEnd: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface HeroData {
  slideNavigationLabel: string;
  goToSlideLabel: string;
  autoplayDelay: number;
  slides: HeroSlide[];
}

export interface HeroProps {
  data?: HeroData;
}

export interface AboutFeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface AboutUsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  title2: string;
  description: string;
  imageMain: string;
  imageMainAlt: string;
  imageTop: string;
  imageTopAlt: string;
  imageBottom: string;
  imageBottomAlt: string;
  features: AboutFeatureItem[];
}

export interface AboutUsProps {
  data?: AboutUsData;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  url: string;
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  title3: string;
  description: string;
  linkText: string;
  services: ServiceItem[];
}

export interface ServicesProps {
  data?: ServicesData;
}

export interface ServiceCardProps {
  service: ServiceItem;
  linkText: string;
}

export interface WhyChooseUsFeature {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: WhyChooseUsFeature[];
  button: { text: string; url: string };
  showButton: boolean;
  imageMain: string;
  imageAlt: string;
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  image: string;
  imageAlt: string;
  url: string;
}

export interface ProjectsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  previousLabel: string;
  nextLabel: string;
  buttonText: string;
  buttonUrl: string;
  projects: ProjectItem[];
}

export interface ProjectsProps {
  data?: ProjectsData;
}

export interface ImpactStat {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface ImpactData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  stats: ImpactStat[];
}

export interface ImpactProps {
  data?: ImpactData;
}

export interface ImpactCounterProps {
  value: string;
  start: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  videoImage: string;
  videoImageAlt: string;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface FaqItem {
  id: string;
  icon: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonLabel: string;
  ctaButtonUrl: string;
  items: FaqItem[];
}

export interface FaqProps {
  data?: FaqData;
}

export interface ContactServiceOption {
  id: string;
  label: string;
  value: string;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
}

export interface ContactData {
  intro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
  };
  form: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    helperText: string;
    fullNamePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    servicePlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
    servicesList: ContactServiceOption[];
  };
  contactPanel: {
    items: ContactInfoItem[];
  };
  location: {
    mapUrl: string;
    mapTitle: string;
  };
}

export interface ContactProps {
  data?: ContactData;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  brandTitle: string;
  copyrightText: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  quickLinksTitle: string;
  servicesTitle?: string;
  contactTitle: string;
  followUsTitle: string;
  socialLinks: { id: string; icon: string; label: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  servicesLinks?: { id: string; label: string; url: string }[];
  contactInfo: { address: string; phone: string; email: string };
}

export interface FooterProps {
  data?: FooterData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<string, TemplateComponentPage>;
}

export interface PageComponentRegistry {
  components: (string | TemplateComponentItem)[];
}

export interface CyberSecurityTemplateData {
  common: {
    Footer?: FooterData;
  };
  categories: {
    CyberSecurity: {
      templateComponents?: TemplateComponentsData;
      sections: {
        Header?: { variants?: { CyberSecurityHeader2?: HeaderData } };
        Hero?: { variants?: { CyberSecurityHero2?: HeroData } };
        AboutUs?: { variants?: { CyberSecurityAboutUs2?: AboutUsData } };
        Services?: { variants?: { CyberSecurityServices2?: ServicesData } };
        whyChooseUs?: { variants?: { CyberSecurityWhyChooseUs2?: WhyChooseUsData } };
        Projects?: { variants?: { CyberSecurityProjects2?: ProjectsData } };
        Impact?: { variants?: { CyberSecurityImpact2?: ImpactData } };
        Testimonials?: { variants?: { CyberSecurityTestimonials2?: TestimonialsData } };
        Faq?: { variants?: { CyberSecurityFaq2?: FaqData } };
        Contact?: { variants?: { CyberSecurityContact2?: ContactData } };
      };
    };
  };
  pages: Record<string, PageComponentRegistry>;
}
