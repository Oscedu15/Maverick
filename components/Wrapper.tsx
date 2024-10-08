import {WrapperProps} from "@/Types";
import Link from "next/link";
import { IoLogoGooglePlaystore, IoLogoSkype, IoMailOpen } from "react-icons/io5";

export default function Wrapper({children, className}: WrapperProps) {

     const socialIcons = "text-3xl px-2 bg-black text-white rounded-full cursor-pointer text-Black"

  return (
    
    <section className={className}>
        <>{children}</>
        <div className="fixed bottom-12 right-6 hidden md:flex items-center 
        flex-col gap-4">
        <Link href={"https://www.googleplay.com"} target={"_blank"}>
            <IoLogoGooglePlaystore className={socialIcons}/>
            </Link>
            <Link href={"https://www.googleplay.com"} target={"_blank"}>
            <IoLogoSkype className={socialIcons}/>
            </Link>
            <Link href={"https://www.googleplay.com"} target={"_blank"}>
            <IoMailOpen className={socialIcons}/>
            </Link>
        </div>
    </section>
  )
}
