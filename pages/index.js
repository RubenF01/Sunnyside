import Head from "next/head";
import Hero from "../components/Hero";
import TransformSection from "../components/TransformSection";
import StandOutSection from "../components/StandOutSection";
import GraphicSection from "../components/GraphicSection";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState(true);

  const isMenuToggled = () => setMenu(!menu);

  return (
    <div>
      <Head>
        <title>Sunnyside</title>
        <meta name="description" content="Sunnyside" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="relative">
        <Menu menu={menu} />
        <Hero isMenuToggled={isMenuToggled} />
        <TransformSection />
        <StandOutSection />
        <GraphicSection />
        <Testimonials />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}
