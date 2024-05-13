import { useEffect } from 'react';
import Container from '../Container';
import { BackgroundBeams } from '../ui/beams';
import './style.css';

import BuyCard from './BuyCard';

export default function Hero() {
  return (
    <div>
      <div className='spot'>
        <div className='hero-container min-h-screen'>
          <Container className=' gap-36 max-sm:gap-16 max-md:flex-col max-sm:pt-36 pt-48 justify-between relative z-20 w-full'>
            <div className='text-center'>
              <h1 className='text-[2rem] text-primary max-sm:text-3xl xl:text-6xl font-bold leading-tight bg-gradient-to-l from-[#FF1CF7] to-[#00F0FF] bg-clip-text text-transparent'>
                NEW ERA OF DIGITAL FINANCE
              </h1>

              <p className='paragraph text-gray-300 font-normal max-sm:text-sm text-lg sm:block mt-4'>
                At ARISPAY we are more than a payment processor, we are gateway
                to the future of finance.
              </p>
            </div>

            <div className='mt-20'>
              <BuyCard />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
