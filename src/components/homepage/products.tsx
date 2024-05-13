import Container from '../Container';

const ProductsList = [
  {
    aos: 'fade-right',
    title: 'Secure On and Off Ramp Access',
    image: '/assets/ramp.svg',
    texts: [
      {
        title: 'On-Ramp Simplicity',
        text: 'Enter the crypto economy easily with fiat currency through diverse local and global payment methods.',
      },
      {
        title: 'Effortless Off-Ramping',
        text: 'Seamlessly convert crypto to fiat and transfer directly to global bank accounts with competitive fees.',
      },
    ],
  },
  {
    title: 'Empowering Digital Transactions',
    aos: 'fade-left',
    image: '/assets/digital-tnx.svg',
    texts: [
      {
        title: 'User-Friendly Payment Gateway',
        text: 'Facilitate encrypted debit/credit card transactions with the utmost security and simplicity.',
      },
      {
        title: 'Cutting-Edge Wallet Interface',
        text: 'Experience the Aris App’s multi-currency support and direct DeFi access within a secure and user-friendly environment .',
      },
    ],
  },
  {
    title: 'Versatile Visa Cards for Everyday Use',
    aos: 'fade-right',
    image: '/assets/crypto-card.svg',
    texts: [
      {
        title: 'ArisPay Visa Cards',
        text: 'Enjoy the ease of traditional bank cards with real-time crypto-to-fiat conversion at ATMs and POS terminals worldwide.',
      },
      {
        title: 'Rewarding Experience',
        text: 'Benefit from attractive cashback in $ARIS and lower transaction fees.',
      },
    ],
  },
  {
    title: 'Expanding Financial Horizons',
    image: '/assets/financial-horizons.svg',
    aos: 'fade-left',
    texts: [
      {
        title: 'Inclusive DeFi Integration',
        text: 'Leverage our platform for peer-to-peer lending services, making financial services more accessible and efficient.',
      },
      {
        title: 'Rewarding Loyalty',
        text: ' Engage with the Aris Rewards App Program for tier-based rewards, empowering users with each transaction .',
      },
    ],
  },
];

export default function Products() {
  return (
    <div className='relative py-20'>
      <img
        data-aos='fade-left'
        className='absolute bottom-0 left-0 h-96'
        src='/cube.svg'
        alt=''
      />
      <Container>
        {/* <div className='relative w-full '>
          <div className='absolute left-0 right-0 top-1/2 bg-gray-800 h-px'></div>
        </div> */}
        <div className='text-center mt-20'>
          <h1 className='text-white text-6xl font-bold'>Products</h1>
          <h2 className='text-white text-xl font-medium mb-10 mt-2'>
            Our Products, Your Convenience
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-5 gap-7'>
          {ProductsList.map((product) => {
            return (
              <ProductCard
                aos={product.aos}
                image={product.image}
                title={product.title}
                texts={product.texts}
              ></ProductCard>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

interface IProduct {
  aos: string;
  title: string;
  image: string;
  texts: {
    title: string;
    text: string;
  }[];
}

function ProductCard(props: IProduct) {
  return (
    <div
      data-aos={props.aos}
      className='bg-gradient-to-l from-[#FF1CF7] to-[#00F0FF] p-[1px] rounded-2xl'
    >
      <div className='rounded-2xl bg-black p-5 border-gray-700 border flex flex-row h-full'>
        <div className='mr-4'>
          <img
            src={props.image}
            height={70}
            width={70}
            alt=''
          />
        </div>

        <div>
          <h2 className='text-white text-2xl font-semibold'>{props.title}</h2>
          {props.texts.map((e) => {
            return (
              <div className='mt-5 flex flex-col'>
                <span className='font-semibold text-[#00F0FF]'>{e.title}</span>
                <span className='text-white text-gray-400'>{e.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
