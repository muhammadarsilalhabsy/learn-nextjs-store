import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import {Suspense} from "react";
import LoadingContainer from "@/components/global/LoadingContainer";

function HomePage() {
  return (
    <>
      <Hero/>
      <Suspense fallback={<LoadingContainer/>}>
        <FeaturedProducts/>
      </Suspense>
    </>
  );
}

export default HomePage;

/*
* Suspense components dari react berfugsi membungkus component lainnya
* saat terjadi loading
* Suspense biasanya dilakukan diatas function async atau yang mengembalikan promise
* */