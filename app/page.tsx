import  { Metadata } from 'next';
import { ParallaxProvider } from '@/components/parallax-provider';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { TrustedBySection } from '@/components/trusted-by-section';
import { ServicesSection } from '@/components/services-section';
import { GHLSection } from '@/components/GHL-section';
import { CaseStudiesSection } from '@/components/case-studies-section';
import { StatsSection } from '@/components/stats-section';
import { IndustriesSection } from '@/components/industries-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FAQSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { ServiceJsonLd } from '@/components/seo/json-ld';
import { InfiniteServices} from '@/components/infinite-section';
import { ProcessSection } from '@/components/process-section';
import Portfoliosection from "@/components/portfolio-section";
import { AboutTeam } from "@/components/about-team";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.startsWith('http')
  ? process.env.NEXT_PUBLIC_SITE_URL
  : 'https://revolixtech.com';

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(SITE_URL), 
    title: 'Revolix Technologies — AI Systems, CRM Automation & Custom Software',
    description: 'We build production AI agents, GoHighLevel automation, and backend infrastructure.',
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: 'Revolix Technologies — AI Systems, CRM Automation & Custom Software',
      description: 'We build production AI agents, GoHighLevel automation, and backend infrastructure.',
      url: '/',
      siteName: 'Revolix Technologies',
      type: 'website',
    },
  };
}

export default function HomePage() {
  const SHOW_GRAPHICS = process.env.NEXT_PUBLIC_SHOW_GRAPHICS === 'true';

  return (
    <ParallaxProvider>
      <Header />
      <main>
        <ServiceJsonLd
          name="Professional Web Development, SEO & Digital Marketing Services"
          description={
            SHOW_GRAPHICS
              ? 'Web development, SEO services, digital marketing, and graphic design for businesses ready to grow.'
              : 'Web development, SEO services, and digital marketing for businesses ready to grow.'
          }
          url={SITE_URL}
          serviceType={
            SHOW_GRAPHICS
              ? 'Web Development, SEO, Digital Marketing, Graphic Design'
              : 'Web Development, SEO, Digital Marketing'
          }
          providerName="Revolix Technologies"
        />
        <HeroSection />
        {/* <TrustedBySection /> */}
        <ServicesSection />
        {/* <GHLSection /> */}
        {/* <CaseStudiesSection /> */}
        <IndustriesSection />
        <InfiniteServices />
        <StatsSection />
        {/* <Portfoliosection /> */}
        <ProcessSection />
        <AboutTeam />
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </ParallaxProvider>
  );
}