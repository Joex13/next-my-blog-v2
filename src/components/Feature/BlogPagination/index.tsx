import React from 'react';
import { Pagination } from '@/components/Base';

type Props = {
  totalCount: number;
  totalPage: number;
  currentPage: number;
};

const BlogPagination = ({ currentPage, totalPage }: Props) => {
  return (
    <Pagination
      totalPage={totalPage}
      currentPage={currentPage}
      visiblePages={3}
    />
  );
};

export default BlogPagination;
