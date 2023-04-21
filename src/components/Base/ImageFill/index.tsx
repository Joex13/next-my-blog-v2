import React from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};

const ImageFill = ({ src, alt }: Props) => {
  return (
    <div className="relative aspect-square">
      <Image src={src} alt={alt} fill />
    </div>
  );
};

export default ImageFill;
