import React, { PropsWithChildren } from 'react';
import Link from 'next/link';
import { useLocale } from 'use-intl';

const TextLink: React.FC<
  PropsWithChildren<{
    locale?: string;
    href?: string;
    onClick?: () => void;
    newTab?: boolean;
    defaultUnderline?: boolean;
  }>
> = (props) => {
  const locale = useLocale();
  return (
    <Link
      href={`/${props.locale ?? locale}${props.href}`}
      onClick={props.onClick}
      target={props.newTab ? '_blank' : undefined}
      className={`text-sky-800 hover:text-sky-600 hover:underline active:text-sky-950 ${props.defaultUnderline ? 'underline' : ''}`}
    >
      {props.children}
    </Link>
  );
};

export default TextLink;
