import {FaStar} from "react-icons/fa";

function ProductRating({productId}: { productId: string }) {
  const rating: number = 4.5
  const count: number = 25;
  console.log(`ProductRating id = ${productId}`)
  const className: string = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue: string = `(${count}) reviews`;

  return (
    <span className={className}>
      <FaStar className={"w-3 h-3"}/>
      {rating} {countValue}
    </span>
  );
}

export default ProductRating;