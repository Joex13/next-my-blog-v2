import React from 'react';
import { Pagination } from '@/components/Base';
import Link from 'next/link';

type Props = {
  totalCount: number;
  PER_PAGE: number;
  currentPage: number;
};

const BlogPagination = ({ totalCount, PER_PAGE, currentPage }: Props) => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <Pagination>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li
          key={index}
          className={
            'duration-300 ' +
            (currentPage === number
              ? 'bg-orange-950 text-white'
              : 'bg-orange-600 hover:opacity-70')
          }
        >
          <Link
            className={
              'inline-block p-3 ' +
              (currentPage === number && 'pointer-events-none')
            }
            href={`/blog/${number}`}
          >
            {number}
          </Link>
        </li>
      ))}
    </Pagination>
  );
};

export default BlogPagination;
