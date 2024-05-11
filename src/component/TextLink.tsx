import React, { PropsWithChildren } from "react";
import Link from "next/link";

const TextLink: React.FC<
  PropsWithChildren<{
    href: string;
    onClick?: () => void;
    newTab?: boolean;
    defaultUnderline?: boolean;
  }>
> = (props) => {
  return (
    <Link
      href={props.href}
      onClick={props.onClick}
      target={props.newTab ? "_blank" : undefined}
      className={`text-sky-800 hover:text-sky-600 hover:underline active:text-sky-950 ${props.defaultUnderline ? "underline" : ""}`}
    >
      {props.children}
    </Link>
  );
};

export default TextLink;
