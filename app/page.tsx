import { Metadata } from 'next';
import { ParallaxProvider } from '@/components/parallax-provider';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { InfiniteServices } from '@/components/infinite-section';
import { IndustriesSection } from '@/components/industries-section';
import { WhyChooseSection } from '@/components/why-choose-us';
import { ProcessSection } from '@/components/process-section';
import { AboutTeam } from '@/components/about-team';
import { FAQSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/json-ld';


const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.startsWith('http')
    ? process.env.NEXT_PUBLIC_SITE_URL
    : 'https://www.revolixtech.com'
).replace(/\/+$/, '');

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(SITE_URL), 
    title: 'Websites, AI Automations & Custom Software | Revolix Technologies',
    description: 'We build your website, automate your follow-up, and create the tools your team needs, so more inquiries turn into booked jobs. US company, dedicated team, a fixed quote after one call.',
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: 'Websites, AI Automations & Custom Software | Revolix Technologies',
      description: 'We build your website, automate your follow-up, and create the tools your team needs, so more inquiries turn into booked jobs. US company, dedicated team, a fixed quote after one call.',
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
        <BreadcrumbJsonLd items={[{ name: "Home", item: `${SITE_URL}/` }]} />
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
        <ServicesSection />
        <InfiniteServices />
        <IndustriesSection />
        <WhyChooseSection />
        <ProcessSection />
        <AboutTeam />
        <FAQSection />
      </main>
      
      <Footer />
    </ParallaxProvider>
  );
}