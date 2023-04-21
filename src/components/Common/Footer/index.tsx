import React from 'react';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-orange-200 mt-4">
      <div className="flex p-4 justify-between max-w-screen-lg mx-auto">
        <Link href="/">Next My Blog</Link>
        <Link href="/">Next My Blog</Link>
      </div>
    </footer>
  );
};

export default Footer;
