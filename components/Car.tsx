import Image from "next/image";
import React from "react";

export default function Car() {
  return (
    <div>
      <Image src={"/home.jpg"} alt="home" width={1980} height={1980} 
      className="transalate-z-0 w-[54rem] h-full" />
    </div>
  );
}
