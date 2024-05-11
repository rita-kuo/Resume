import React from "react";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

const Information: React.FC = () => {
  return (
    <div className="space-y-2 p-4 md:space-y-4">
      <div className="relative w-full pt-[100%]">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          fill
          className="rounded-full border shadow-lg"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <h1 className="text-center">Rita Kuo</h1>
      <div className="flex justify-center gap-1 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:md:h-6 [&>svg]:md:w-6">
        <IoLogoLinkedin />
        <IoLogoGithub />
        <IoMailOutline />
      </div>
    </div>
  );
};

export default Information;
