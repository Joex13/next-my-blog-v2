import React from 'react';
import { Menu } from '@/components/Base';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-orange-200 mt-4">
      <div className="flex p-4 justify-between max-w-screen-lg mx-auto">
        <Menu className='flex flex-col gap-4' />
      </div>
    </footer>
  );
};

export default Footer;
