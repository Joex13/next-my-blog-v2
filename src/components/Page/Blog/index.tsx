import { BlogList, BlogPagination } from '@/components/Feature';
import type { BlogType } from '@/types/';

type Props = {
  blog: BlogType[];
  totalCount: number;
  currentPage: number;
  totalPage: number;
};

const Blog: React.FC<Props> = ({
  blog,
  totalCount,
  currentPage,
  totalPage,
}) => {
  return (
    <>
      <BlogList blog={blog} />
      <BlogPagination
        totalCount={totalCount}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </>
  );
};

export default Blog;
