'use client';

import fallbackImage from '@images/intro/ms-banner.webp';
import Image from 'next/image';
import { useState } from 'react';

export default function ImageWithFallback({ src, fallbackSrc = fallbackImage.src, alt, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
}
