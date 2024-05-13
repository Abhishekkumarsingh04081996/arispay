import Slider from 'react-slick';
import Container from '../Container';
import './style.css';

export default function OurPartners() {
  return (
    <div className=''>
      <div className='pt-20 flex flex-col items-center rounded-2xl justify-center'>
        <div className='justify-center items-center'>
          <h2 className='text-6xl text-white font-bold'>Our Partners</h2>
          <h3 className='text-white text-xl font-medium mb-10 mt-2'>
            Our Products, Your Convenience
          </h3>
        </div>
        <div className='flex flex-row gap-20 justify-center items-center my-20 '>
          <img
            src='google-cloud.png'
            alt=''
            className='w-72 h-auto'
          />
          <img
            src='aws.png'
            alt=''
            className='w-48 h-auto'
          />
          <img
            src='uniswap.png'
            alt=''
            className='w-72 h-auto'
          />
        </div>
      </div>
    </div>
  );
}
