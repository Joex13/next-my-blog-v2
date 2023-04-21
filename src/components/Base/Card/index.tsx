import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ children, className }: Props) => {
  return (
    <li className={'text-center ' + className}>
      {children}
    </li>
  );
};

export default Card;
