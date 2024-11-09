  "use client"
//components
import Hero from "@/components/Hero";
import Brands from "./components/Brands";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Testimonial from "@/components/Testimonial";
import Trial from "@/components/Trial";
import Footer from "@/components/Footer";


// implement lenis smooth scroll
import { ReactLenis } from 'lenis/dist/lenis-react';

const Home = () => {
  return (
    <>  
      <ReactLenis root>
      <Hero />
      <Brands />
      <Features />
      <Integrations />
      <Testimonial />
      <Trial />
      <Footer />
      {/* tempoary div */}
      {/* <div className="h-[8000px]"></div> */}
      </ReactLenis>
    </>

    );
};

export default Home;