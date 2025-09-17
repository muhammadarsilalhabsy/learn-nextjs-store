import ProductsContainer from "@/components/products/ProductsContainer";

function ProductsPage({searchParams}: { searchParams: { layout?: string, search?: string } }) {
/*  const layout: string = searchParams.layout || "grid";
  const search: string = searchParams.search || "";*/

  // or
  const {layout = "grid", search = ""} = searchParams;
  // search di set sebagai empty string, karena akan menembalikan semua data
  // sedangkan apabila diset sebagai undefinde maka itu tidak akan mengembalikan data

  return <ProductsContainer layout={layout} search={search}/>;
}

export default ProductsPage;

/*
* searchParams parameter akan mengembalikan query url dari browser
* contoh: /products?name=Cloth&price=10
* ini akan mengembilkan object {name : "Cloth", price : "10"}
* semua dalam bentuk string
* */