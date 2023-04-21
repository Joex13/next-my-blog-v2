import React from 'react';
import { Pagination } from '@/components/Base';

type Props = {
  totalCount: number;
  PER_PAGE: number;
  currentPage: number;
};

const BlogPagination = ({ totalCount, PER_PAGE, currentPage }: Props) => {
  return (
    <>
      <Pagination
        totalCount={totalCount}
        PER_PAGE={PER_PAGE}
        currentPage={currentPage}
      />
    </>
  );
};

export default BlogPagination;
