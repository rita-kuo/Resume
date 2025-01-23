import React, { HTMLProps } from 'react';
import clsx from 'clsx';

export const BaseButton: React.FC<
  HTMLProps<HTMLButtonElement> & {
    rounded?: string;
    px?: string;
    py?: string;
    textSize?: string;
  }
> = (props) => (
  <button
    {...props}
    type={(props.type as 'submit' | 'reset' | 'button' | undefined) ?? 'button'}
    className={clsx(
      props.rounded ?? 'rounded',
      props.px ?? 'px-4',
      props.py ?? 'py-2',
      props.textSize ?? 'text-2xl',
      props.className,
    )}
  />
);

export const PrimaryButton: React.FC<
  HTMLProps<HTMLButtonElement> & {
    bgColor?: string;
    textColor?: string;
  }
> = (props) => (
  <BaseButton
    {...props}
    className={clsx(
      'font-bold disabled:bg-gray-300',
      props.bgColor ?? 'bg-teal-700',
      props.textColor ?? 'text-white',
      props.className,
    )}
  />
);

export const SecondaryButton: React.FC<
  HTMLProps<HTMLButtonElement> & {
    borderColor?: string;
    textColor?: string;
  }
> = (props) => (
  <BaseButton
    {...props}
    className={clsx(
      'border disabled:border-gray-300 disabled:text-gray-300',
      props.borderColor ?? 'border-teal-700',
      props.textColor ?? 'text-teal-700',
      props.className,
    )}
  />
);
