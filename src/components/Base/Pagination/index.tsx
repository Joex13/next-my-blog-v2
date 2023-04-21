import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Pagination = ({ children }: Props) => {
  return (
    <nav className="mx-auto mt-4">
      <ul className="flex justify-center gap-4">{children}</ul>
    </nav>
  );
};

export default Pagination;
