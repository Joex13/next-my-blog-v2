import React from 'react';
import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-orange-200">
      <div className="flex p-4 justify-between max-w-screen-lg mx-auto">
        <Link href="/">Next My Blog</Link>
        <Link href="/">Next My Blog</Link>
      </div>
    </header>
  );
};

export default Header;
