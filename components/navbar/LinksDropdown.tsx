import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {LuAlignLeft} from "react-icons/lu";
import {Button} from "@/components/ui/button";
import {links} from "@/utils/links";
import Link from "next/link";
import UserIcon from "@/components/navbar/UserIcon";
import {SignedIn, SignedOut, SignInButton, SignUpButton} from "@clerk/nextjs";
import SignOutLink from "@/components/navbar/SignOutLink";


function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className={"flex gap-4 max-w-[100px]"}>
          <LuAlignLeft className={"w-6 h-6"}/>
          <UserIcon/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-40"} align={"start"} sideOffset={10}>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode={"modal"}>
              <button className={"w-full text-left"}>login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem>
            <SignUpButton mode={"modal"}>
              <button className={"w-full text-left"}>register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {links.map((link) => {
              return <DropdownMenuItem key={link.href}>
                <Link href={link.href} className={"w-full capitalize"}>{link.label}</Link>
              </DropdownMenuItem>
            }
          )}
          <DropdownMenuSeparator/>
          <DropdownMenuItem>
            <SignOutLink/>
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;