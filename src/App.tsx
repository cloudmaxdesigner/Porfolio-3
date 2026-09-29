import { useLenis } from "./hooks/useLenis";
import { IntroAnimation } from "./components/IntroAnimation";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { Approach } from "./sections/Approach";
import { Articles } from "./sections/Articles";
import { ClientLogos } from "./sections/ClientLogos";
import { Faq } from "./sections/Faq";
import { Hero } from "./sections/Hero";
import { Pricing } from "./sections/Pricing";
import { Process } from "./sections/Process";
import { Projects } from "./sections/Projects";
import { Services } from "./sections/Services";
import { Testimonials } from "./sections/Testimonials";
import { WhyChooseUs } from "./sections/WhyChooseUs";

export function App() {
  useLenis();

  return (
    <>
      <IntroAnimation />
      <SiteHeader />
      <main>
        <Hero />
        <ClientLogos />
        <Approach />
        <Projects />
        <WhyChooseUs />
        <Services />
        <Process />
        <Pricing />
        <ClientLogos />
        <Testimonials />
        <Faq />
        <Articles />
      </main>
      <SiteFooter />
    </>
  );
}
