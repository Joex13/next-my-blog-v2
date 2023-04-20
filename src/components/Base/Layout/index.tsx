import React from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="bg-orange-200">
        <div className="flex p-4 justify-between max-w-screen-lg mx-auto">
          <Link href="/">Next My Blog</Link>
          <Link href="/">Next My Blog</Link>
        </div>
      </header>
      <main>
        <div className="max-w-screen-lg mx-auto p-4">{children}</div>
      </main>
      <footer className="bg-orange-200">
        <div className="flex p-4 justify-between max-w-screen-lg mx-auto">
          <Link href="/">Next My Blog</Link>
          <Link href="/">Next My Blog</Link>
        </div>
      </footer>
    </>
  );
};

export default Layout;
