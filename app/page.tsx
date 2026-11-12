import {
  Hero,
  About,
  Programs,
  Impact,
  Ways,
  Campaigns,
  Counter,
  Testimonials,
  Consistency,
  Stories,
  FaqSection,
  Cta,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Programs />
        <Impact />
        <Ways />
        <Campaigns />
        <Counter />
        <Testimonials />
        <Consistency />
        <Stories />
        <FaqSection />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
