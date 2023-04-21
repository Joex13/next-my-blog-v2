import React from 'react';
import Link from 'next/link';

type Props = {
  href: string;
  className?: string;
  children: string;
};

const Anchor = ({ href, className, children }: Props) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default Anchor;
