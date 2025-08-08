import { useState } from "preact/hooks";

import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { CategorySection } from "@/components/CategorySection";
import {
  FeaturedCarousel,
  featuredProducts,
} from "@/components/FeaturedCarousel";

import { ProductCard } from "@/components/ProductCard/productCard";
import { productsPage1 } from "@/components/ProductCard/mocks/products-page1";
import { productsPage2 } from "@/components/ProductCard/mocks/products-page2";
import { Pagination } from "@/components/ProductCard/pagination";
import type { Product } from "@/components/ProductCard/productCard.types";

import { HighlightsSection } from "@/components/HighlightsSection";
import { PopularProductsCarousel } from "@/components/PopularProductsCarousel";
import { Newsletter } from "@/components/Newsletter/Newsletter";
import { Footer } from "@/components/Footer";

export default function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const products = currentPage === 1 ? productsPage1 : productsPage2;

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />
      <Header />
      <HeroBanner />
      <CategorySection />
      <FeaturedCarousel products={featuredProducts} />

      <section className="px-6 py-12 max-w-7xl mx-auto">
        <h2 className="text-left text-[16px] leading-[20px] font-semibold text-[#4f4f4f] uppercase mb-6">
          ESCOLHA NOSSOS
          <br />
          PRODUTOS E SERVIÇOS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {products.map((product: Product, index: number) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={2}
          onPageChange={setCurrentPage}
        />
      </section>

      {/* Destaques fixos abaixo da paginação */}
      <HighlightsSection />

      {/* Carrossel de produtos populares com Splide.js */}
      <PopularProductsCarousel />

      {/* Seção de newsletter */}
      <Newsletter />

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
