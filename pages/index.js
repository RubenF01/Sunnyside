import Hero from "../components/Hero";
import TransformSection from "../components/TransformSection";
import StandOutSection from "../components/StandOutSection";
import GraphicSection from "../components/GraphicSection";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sunnyside</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className="">
        <Hero />
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
