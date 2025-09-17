import {Button} from "@/components/ui/button";

function AddToCart({productId}: {productId: string}) {
  console.log(`AddToCart id = ${productId}`);
  return (
    <Button className={"capitalize mt-8"}>add to cart</Button>
  );
}

export default AddToCart;