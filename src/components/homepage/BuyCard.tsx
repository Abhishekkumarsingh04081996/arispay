import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

type ICrypto = {
  symbol: String;
  name: String;
  id: number;
  icon: String;
};
type ICurrency = {
  code: String;
  name: String;
  country: String;
  countryCode: String;
  flag: String;
};
const CryptoList = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    id: 1,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    id: 1027,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
  },
  {
    symbol: 'USDT',
    name: 'Tether',
    id: 825,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/825.png',
  },
  {
    symbol: 'BNB',
    name: 'Binance Coin',
    id: 1839,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png',
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    id: 74,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/74.png',
  },

  {
    symbol: 'LTC',
    name: 'Litecoin',
    id: 2,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/2.png',
  },
  {
    symbol: 'TRX',
    name: 'TRON',
    id: 1958,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1958.png',
  },
  {
    symbol: 'DOT',
    name: 'Dotcoin',
    id: 6636,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/6636.png',
  },
  {
    symbol: 'SOL',
    name: 'Sola',
    id: 5426,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/5426.png',
  },

  {
    symbol: 'ONE',
    name: 'Menlo One',
    id: 3945,
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/3945.png',
  },
];

const CurrencyList = [
  {
    code: 'INR',
    name: 'Indian Rupee',
    country: 'India',
    countryCode: 'IN',
    flag: 'https://flagsapi.com/IN/shiny/64.png',
  },
  {
    code: 'CAD',
    name: 'Canadian Dollar',
    country: 'Canada',
    countryCode: 'CA',
    flag: 'https://flagsapi.com/CA/shiny/64.png',
  },
  {
    code: 'GBP',
    name: 'Pound Sterling',
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: 'https://flagsapi.com/GB/shiny/64.png',
  },
  {
    code: 'USD',
    name: 'United States Dollar',
    country: 'United States',
    countryCode: 'US',
    flag: 'https://flagsapi.com/US/shiny/64.png',
  },
  {
    code: 'BRL',
    name: 'Brazilian Real',
    country: 'Brazil',
    countryCode: 'BR',
    flag: 'https://flagsapi.com/BR/shiny/64.png',
  },
];

function BuyCard() {
  return (
    <div className='flex justify-center'>
      <div className='p-7 w-1/3 max-sm:w-full flex jutify-center item-center flex-col border border-[#3D84F529] pt-4 md:pt-10 transition hover:shadow-[0_0_60px_-15px_hsla(219,91%,60%,0.2)] rounded-2xl backdrop-blur-2xl bg-gradient-to-t from-[#3D84F529] to-[#3D84F550]'>
        <div></div>
        <span className='px-1 text-lg font-semibold text-white content-center'>
          {'Pay'}
        </span>
        <div className='rounded-lg p-3 mt-1 flex flex-row bg-white'>
          <input
            name='currency'
            onChange={(e) => {}}
            placeholder='0.00'
            className='w-full text-black text-xl font-semibold rounded-lg bg-white outline-none h-10'
          />
          <div className='flex flex-row jutify-center item-center content center'>
            <div className='content-center'>
              <img
                src={`${CurrencyList[1].flag}`}
                // height={}
                alt=''
              />
            </div>
            <span className='px-1 text-xl content-center'>{`${CurrencyList[1].code}`}</span>
            <div className='content-center'>
              <RiArrowDownSLine className='text-2xl' />
            </div>
          </div>
        </div>

        <div className='h-5'></div>

        <span className='px-1 text-lg font-semibold text-white content-center'>
          {'Get'}
        </span>
        <div className='rounded-lg p-3 mt-1 flex flex-row justify-between bg-white'>
          <input
            name=''
            onChange={(e) => {}}
            placeholder='0.00'
            className=' w-full text-black text-xl font-semibold rounded-lg bg-white outline-none h-10'
          />
          <div className='flex flex-row jutify-center item-center content center'>
            <div className='content-center w-7'>
              <img
                src={`${CryptoList[0].icon}`}
                alt=''
              />
            </div>
            <span className='px-1 text-xl content-center'>{`${CryptoList[0].symbol}`}</span>
            <div className='content-center'>
              <RiArrowDownSLine className='text-2xl' />
            </div>
          </div>
        </div>

        <button
          className='items-center mt-12  justify-center rounded-full py-5 mx-5 bg-primary'
          onClick={() => {}}
        >
          <span className='text-white text-lg font-bold'>Buy Now</span>
        </button>

        <div className='h-4'></div>

        <div className='flex justify-center items-center center'>
          <p className='text-sm text-white'>Powerd By</p>
          <img
            src='/assets/logo-o.png'
            className='w-10'
            alt='logo'
          />{' '}
          <p className='text-md text-white font-bold uppercase'>ArisPay</p>
        </div>
      </div>
    </div>
  );
}

export default BuyCard;
