import React from "react";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

const Information: React.FC = () => {
  return (
    <div className="flex gap-6 md:flex-col md:gap-4">
      <div className="relative basis-1/4 pt-[25%] md:w-full md:pt-[100%]">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          fill
          className="rounded-full border shadow-lg"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="space-y-2 md:space-y-4">
        <h1 className="basis-4/4 text-center">Rita Kuo</h1>
        <div className="flex gap-1 md:justify-center [&>svg]:h-5 [&>svg]:w-5 [&>svg]:md:h-6 [&>svg]:md:w-6">
          <IoLogoLinkedin />
          <IoLogoGithub />
          <IoMailOutline />
        </div>
      </div>
    </div>
  );
};

export default Information;
