import React from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  aspectSquare: boolean;
  className?: string;
};

const ImageFill = ({ src, alt, className, aspectSquare }: Props) => {
  return (
    <div className={`relative ${className} ${aspectSquare && 'aspect-square'}`}>
      <Image src={src} alt={alt} fill />
    </div>
  );
};

export default ImageFill;
