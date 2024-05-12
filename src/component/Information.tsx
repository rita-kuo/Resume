import React, { PropsWithChildren } from "react";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";

const IconLink: React.FC<PropsWithChildren<{ href: string }>> = (props) => (
  <Link
    href={props.href}
    target="_blank"
    className="[&>svg:hover]:text-sky-600 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:cursor-pointer [&>svg]:md:h-6 [&>svg]:md:w-6"
  >
    {props.children}
  </Link>
);

const Information: React.FC = () => {
  return (
    <div className="flex items-center gap-6 space-y-2 p-4 pb-0 md:block md:space-y-4 md:p-4">
      <div className="relative basis-[30%] pt-[30%] md:w-full md:pt-[100%]">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          fill
          className="rounded-full border shadow-lg"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div className="md:space-y-4">
        <h1 className="text-center">Rita Kuo</h1>
        <div className="flex gap-2 md:justify-center">
          <IconLink href="https://www.linkedin.com/in/rita-tn-kuo/">
            <IoLogoLinkedin />
          </IconLink>
          <IconLink href="https://github.com/rita-kuo">
            <IoLogoGithub />
          </IconLink>
          <IconLink href="mailto:coco6224@gmail.com">
            <IoMailOutline />
          </IconLink>
        </div>
      </div>
    </div>
  );
};

export default Information;
