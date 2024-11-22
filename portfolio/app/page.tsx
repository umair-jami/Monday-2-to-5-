import Image from "next/image";
import Navbar from "./components/navbar/page";
import About from "./components/about/page";
import Services from "./components/services/page";
import Portfolio from "./components/portfolio/page";
import Testimonial from "./components/testimonial/page";
import Contact from "./components/contact/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
    <Navbar/>
    <About/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  );
}
