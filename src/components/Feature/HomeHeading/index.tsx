import React from 'react';
import { Heading } from '@/components/Base';

type Props = {
  children: string | number;
};

const HomeHeading = ({ children }: Props) => {
  return <Heading level={1}>{children}</Heading>;
};

export default HomeHeading;
