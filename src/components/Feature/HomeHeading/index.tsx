import React from 'react';
import { Heading } from '@/components/Base';

type Props = {
  children: string | number;
};

const HomeHeading = ({ children }: Props) => {
  return <Heading className='font-bold text-2xl' level={1}>{children}</Heading>;
};

export default HomeHeading;
