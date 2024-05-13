import Slider from 'react-slick';
import Container from '../Container';
import './style.css';

export default function WalletSecure() {
  return (
    <div className='relative bg-black h-screen w-full flex justify-center items-center'>
      <div className=''>
        <img
          data-aos='fade-left'
          className='absolute bottom-0 left-0 h-96'
          src='/pos.png'
          alt=''
        />
        <img
          data-aos='fade-right'
          className='absolute top-0 right-0 h-96'
          src='/cards.png'
          alt=''
        />
        <Container>
          <div className='border border-[#00F0FF] rounded-3xl'>
            <img
              className='rounded-3xl'
              src='/crypto_card.png'
              alt=''
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
