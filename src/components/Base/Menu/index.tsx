import React from 'react';
import Link from 'next/link';

type Props = {
  className?: string;
};

const Menu = ({ className }: Props) => {
  return (
    <nav>
      <ul className={className}>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/blog/1">記事一覧</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
