import React from 'react';

type Props = {
  blogContent: string;
};

const Post = ({ blogContent }: Props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `${blogContent}`,
      }}
      className="mt-4"
    />
  );
};

export default Post;
