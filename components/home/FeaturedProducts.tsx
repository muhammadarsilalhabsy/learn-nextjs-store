import {fetchFeatureProducts} from "@/utils/actions";
import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";

async function FeaturedProducts() {
  const products = await fetchFeatureProducts();

  if (products.length < 1) return <EmptyList/>;

  return (
    <section className={"pt-24"}>
      <SectionTitle text={"featured products"}/>
      <ProductsGrid products={products}/>
    </section>
  );
}

export default FeaturedProducts;