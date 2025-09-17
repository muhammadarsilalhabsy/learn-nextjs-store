import { SlDiamond } from "react-icons/sl";
import {Button} from "@/components/ui/button";
import Link from "next/link";
function Logo() {
  return (
    <Button size={"icon"} asChild >
      <Link href={"/"}>
        <SlDiamond className="w-6 h-6 text-foreground"/>
      </Link>
    </Button>
  );
}

export default Logo;