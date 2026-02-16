import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'person' | 'logo' | 'project';
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  fallbackType = 'logo', 
  className,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src as string | undefined);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src as string | undefined);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (hasError) return;
    setHasError(true);

    const safeAlt = encodeURIComponent(alt || 'Image');
    
    // Generate fallback based on type
    switch (fallbackType) {
      case 'person':
        setImgSrc(`https://ui-avatars.com/api/?name=${safeAlt}&background=6366f1&color=fff&size=512`);
        break;
      case 'logo':
        setImgSrc(`https://ui-avatars.com/api/?name=${safeAlt}&background=1e293b&color=cbd5e1&size=128&length=1`);
        break;
      case 'project':
        setImgSrc(`https://placehold.co/600x400/1e293b/cbd5e1?text=${safeAlt}`);
        break;
      default:
        setImgSrc(`https://placehold.co/400x400?text=${safeAlt}`);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`${className} ${hasError ? 'opacity-80' : ''}`}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;