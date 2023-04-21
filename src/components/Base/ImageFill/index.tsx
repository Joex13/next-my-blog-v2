import React from 'react';
import Image from 'next/image';

type Props = {
  url: string;
  alt: string;
};

const ImageFill = ({ url, alt }: Props) => {
  return (
    <div className="relative aspect-square">
      <Image src={url} alt={alt} fill />
    </div>
  );
};

export default ImageFill;
