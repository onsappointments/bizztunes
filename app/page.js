import Hero from './components/Hero';
import Services from './components/Services';
import AudioDemos from './components/AudioDemo';
import WhyBizztunes from './components/WhyBizzTunes';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Testimonials from './components/Testimonial';
import Pricing from './components/Pricing';
import FAQ from './components/Faq';
import OurPlatforms from './components/OurPlatform';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Services />
      {/* <AudioDemos /> */}
      <OurPlatforms/>
      <WhyBizztunes />
      <HowItWorks />
      {/* <Testimonials/> */}
      {/* <Pricing/> */}
      <FAQ/>
      <CTA />
    </main>
  );
}