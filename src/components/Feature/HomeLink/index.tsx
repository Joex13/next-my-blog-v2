import Link from 'next/link';

import React from 'react';

type Props = {
  href: string;
  children: string;
};

const HomeLink = ({ href, children }: Props) => {
  return (
    <Link href={href} className="block bg-orange-400 w-40 mt-4 mx-auto">
      {children}
    </Link>
  );
};

export default HomeLink;
