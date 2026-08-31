import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandIntro from "@/components/home/BrandIntro";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "OSSAI - Premium Furniture & Interior Design",
  description:
    "Discover beautifully crafted furniture and interior pieces designed to bring comfort and elegance into every space.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BrandIntro />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
