import React from 'react';

type Props = {
  children: React.ReactNode;
};

const List = ({children }: Props) => {
  return (
    <nav>
      <ul className="grid grid-cols-2 gap-4">{children}</ul>
    </nav>
  );
};

export default List;
