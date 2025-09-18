import {currentUser} from "@clerk/nextjs/server";
import {LuUser} from "react-icons/lu"
import type { User } from '@clerk/backend';

async function UserIcon() {
  const user: User | null = await currentUser();
  const profileImage: string | undefined = user?.imageUrl;

  if (profileImage) {
    return <img src={profileImage} className={"w-6 h-6 rounded-full object-cover"} alt={"profile image"}/>
  }
  return (
    <LuUser className={"w-6 h-6 rounded-full bg-primary text-white"}/>
  );
}

export default UserIcon;