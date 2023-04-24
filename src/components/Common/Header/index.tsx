import React from 'react';
import Link from 'next/link';
import { Menu } from '@/components/Base';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-orange-200">
      <div className="flex p-4 justify-between max-w-screen-lg mx-auto">
        <Link className='duration-300 hover:opacity-70 font-black' href="/">Next My Blog</Link>
        <Menu className='flex gap-4' />
      </div>
    </header>
  );
};

export default Header;
