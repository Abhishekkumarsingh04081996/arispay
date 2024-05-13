import Container from '../components/Container';
import { Button } from '../components/ui/button';

export default function MainNav() {
  return (
    <nav className='fixed w-full z-50 top-5 '>
      <Container className='border border-gray-700 backdrop-blur-sm rounded-full mx-48'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img
              src='/assets/logo-o.png'
              className='w-16'
              alt='logo'
            />{' '}
            <p className='text-2xl text-white font-bold uppercase'>ArisPay</p>
          </div>

          <div className='flex gap-4 max-sm:hidden'>
            <button className='duration-300 text-white text-lg px-6 py-2 shadow-xl rounded-full hover:bg-white hover:text-black'>
              Products
            </button>
            <button className='duration-300 text-white text-lg px-6 py-2 shadow-xl rounded-full hover:bg-white hover:text-black'>
              Resources
            </button>
            <button className='duration-300 text-white text-lg px-6 py-2 shadow-xl rounded-full hover:bg-white hover:text-black'>
              Pricing
            </button>
            {/* <button className='duration-300 text-white text-lg px-6 py-2 shadow-xl rounded-full hover:bg-white hover:text-black'>
              About
            </button> */}
          </div>
          <div>
            <button className='border border-primary duration-300 text-white text-lg px-6 py-2 shadow-xl rounded-lg bg-primary'>
              Sign Up Now
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
