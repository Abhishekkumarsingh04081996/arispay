import React from 'react';
import { HoverBorderGradient } from './ui/hover-border-gradient';

export function AnimateButton() {
  return (
    <div className='flex justify-center text-center'>
      <HoverBorderGradient
        containerClassName='rounded-full'
        as='button'
        className='dark:bg-black bg-black text-white text-2xl '
      >
        Coming Soon
      </HoverBorderGradient>
    </div>
  );
}
