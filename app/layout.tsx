import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import rawData from '@/data/templates.json';
import { CyberSecurityTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CyberShield Cybersecurity Services",
  description: "Advanced cybersecurity protection, monitoring and digital risk solutions for modern businesses.",
  icons: {
    icon: '/main logo/cybershield-logo.png',
    shortcut: '/main logo/cybershield-logo.png',
    apple: '/main logo/cybershield-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const templateData: CyberSecurityTemplateData = rawData;
  const sectionData = templateData.categories.CyberSecurity.sections;
  const commonData = templateData.common;

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header data={sectionData.Header?.variants?.CyberSecurityHeader2} />
        {children}
        <Footer data={commonData.Footer} />
      </body>
    </html>
  );
}
