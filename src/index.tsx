import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import CategorySection from "@/components/CategorySection";
import {
  FeaturedCarousel,
  featuredProducts,
} from "@/components/FeaturedCarousel";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />
      <Header />
      <HeroBanner />
      <CategorySection />
      <FeaturedCarousel products={featuredProducts} />
    </div>
  );
}
