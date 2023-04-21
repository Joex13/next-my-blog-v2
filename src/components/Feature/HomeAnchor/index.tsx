import { Anchor } from '@/components/Base';

import React from 'react';

type Props = {
  href: string;
  className?: string;
  children: string;
};

const HomeAnchor = ({ href, className, children }: Props) => {
  return (
    <Anchor href={href} className={className}>
      {children}
    </Anchor>
  );
};

export default HomeAnchor;
