import React from 'react';
import Link from 'next/link';
import { Pagination } from '@/components/Base';

type Props = {
  totalCount: number;
  PER_PAGE: number;
  currentPage: number;
};

const BlogPagination = ({ totalCount, PER_PAGE, currentPage }: Props) => {
  const totalPagination = Math.ceil(totalCount / PER_PAGE);
  const paginationStart = Math.max(1, currentPage - 2);
  const paginationLast = Math.min(paginationStart + 4, totalPagination);
  const range = () => {
    if (currentPage >= paginationLast - 1) {
      return Array.from({ length: 5 }, (_, i) => paginationLast - 4 + i);
    }
    return Array.from(
      { length: paginationLast - paginationStart + 1 },
      (_, i) => paginationStart + i
    );
  };

  return (
    <Pagination>
      {currentPage >= (PER_PAGE + 2) ? (
        <>
          <li className="duration-300 bg-orange-600 hover:opacity-70">
            <Link className={'inline-block p-3 '} href={`/blog/1`}>
              1
            </Link>
          </li>
          <span>...</span>
        </>
      ) : (
        ''
      )}
      {range().map((number: number, index: number) => (
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
      {currentPage <= totalPagination - (PER_PAGE + 1) ? (
        <>
          <span>...</span>
          <li className="duration-300 bg-orange-600 hover:opacity-70">
            <Link
              className={'inline-block p-3 '}
              href={`/blog/${totalPagination}`}
            >
              7
            </Link>
          </li>
        </>
      ) : (
        ''
      )}
    </Pagination>
  );
};

export default BlogPagination;
