import React from 'react';
import { Pagination } from '@/components/Base';
import Link from 'next/link';

type Props = {
  totalCount: number;
  PER_PAGE: number;
};

const BlogPagination = ({ totalCount, PER_PAGE }: Props) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <Pagination>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} className="bg-orange-600">
          <Link className="p-4" href={`/blog/${number}`}>{number}</Link>
        </li>
      ))}
    </Pagination>
  );
};

export default BlogPagination;
