import {
  Discover,
  Hero,
  MobileApp,
  Features,
  Roadamp,
  AboutUs,
  Products,
} from '../components/homepage';
import DigitalBanking from '../components/homepage/DigitalBanking';
import { GlobeDemo } from '../components/homepage/Globe';
import Rewards from '../components/homepage/Reward';
import MercentSolution from '../components/homepage/mercentsolution';
import OurPartners from '../components/homepage/parters';
import Product from '../components/homepage/product';
import WalletSecure from '../components/homepage/wallet_secure';

export default function Homepage() {
  return (
    <div className=''>
      <DigitalBanking />
      <Product />
      <Rewards />
      <MercentSolution />
      <Roadamp />
      <Hero />

      {/* <OurPartners /> */}
      {/* <MobileApp /> */}
      <Products />
      <GlobeDemo />
      <WalletSecure />
      {/* <Features /> */}
      {/* <Discover /> */}

      <AboutUs />
    </div>
  );
}
