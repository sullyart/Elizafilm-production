import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/HeroSection";
import Work from "@/components/sections/FeaturedWork";
import Services from "@/components/sections/ServicesSection";
import Enquiry from "@/components/sections/ProductionEnquiry";
import { ControlRoom, StudioSpace } from "@/components/sections/Features";
import Gallery from "@/components/sections/GallerySection";
import { Testimonials, Partners } from "@/components/sections/Testimonials";
import News from "@/components/sections/LatestNewsSection";
export default function Page() {
  return (<><Header /><main><Hero /><Work /><Services /><Enquiry /><ControlRoom /><StudioSpace /><Gallery /><Testimonials /><Partners /><News /></main><Footer /></>);
}
