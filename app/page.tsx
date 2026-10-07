
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Skills from "@/components/sections/Skills/Skills";
import Works from "@/components/sections/Works/Works";
import Articles from "@/components/sections/Articles/Articles";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Works />
      <Articles />
      <Contact />
    </>
  );
}