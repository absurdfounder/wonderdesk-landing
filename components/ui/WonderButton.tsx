'use client';

import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import {
  wonderButtonClassName,
  type WonderButtonSize,
  type WonderButtonVariant,
} from './wonderButtonStyles';

type WonderButtonBaseProps = {
  children: ReactNode;
  variant?: WonderButtonVariant;
  size?: WonderButtonSize;
  className?: string;
  icon?: ReactNode;
};

type WonderButtonLinkProps = WonderButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'> & {
    href: string;
    external?: boolean;
  };

type WonderButtonButtonProps = WonderButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children' | 'type'> & {
    href?: undefined;
    type?: 'button' | 'submit' | 'reset';
  };

export type WonderButtonProps = WonderButtonLinkProps | WonderButtonButtonProps;

export default function WonderButton(props: WonderButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    icon,
  } = props;

  const classes = wonderButtonClassName({ variant, size, className });

  const content = (
    <>
      <span>{children}</span>
      {icon ? <span className="inline-flex shrink-0 items-center">{icon}</span> : null}
    </>
  );

  if ('href' in props && props.href) {
    const { href, external, ...rest } = props;
    const isExternal = external || href.startsWith('http');

    if (isExternal) {
      return (
        <a
          {...rest}
          href={href}
          target={rest.target ?? '_blank'}
          rel={rest.rel ?? 'noopener noreferrer'}
          className={classes}
        >
          {content}
        </a>
      );
    }

    return (
      <Link {...rest} href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const { type, ...rest } = props as WonderButtonButtonProps;

  return (
    <button {...rest} type={type ?? 'button'} className={classes}>
      {content}
    </button>
  );
}
