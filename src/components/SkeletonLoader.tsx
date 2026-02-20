import React from 'react';
import './SkeletonLoader.css';

interface SkeletonLoaderProps {
  count?: number;
  height?: number;
  width?: string;
  circle?: boolean;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  count = 1,
  height = 20,
  width = '100%',
  circle = false
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`skeleton ${circle ? 'skeleton-circle' : ''}`}
          style={{
            height: circle ? height : height,
            width: circle ? height : width,
            borderRadius: circle ? '50%' : '4px',
            marginBottom: circle ? 0 : '12px'
          }}
        />
      ))}
    </>
  );
};
