import { Anchor } from '@/components/Base';

import React from 'react';

type Props = {
  href: string;
  children: string;
};

const HomeAnchor = ({ href, children }: Props) => {
  return (
    <Anchor href={href} className="block bg-orange-400 w-40 mt-4 mx-auto">
      {children}
    </Anchor>
  );
};

export default HomeAnchor;
