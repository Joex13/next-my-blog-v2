import { BlogList, BlogPagination } from '@/components/Feature';
import type { Blog } from '@/types/blog';

type Props = {
  blog: [];
  totalCount: number;
  currentPage: number;
  PER_PAGE: number;
};

const Blog: React.FC<Props> = ({ blog, totalCount, currentPage, PER_PAGE }) => {
  return (
    <>
      <BlogList blog={blog} />
      <BlogPagination
        totalCount={totalCount}
        PER_PAGE={PER_PAGE}
        currentPage={currentPage}
      />
    </>
  );
};

export default Blog;
