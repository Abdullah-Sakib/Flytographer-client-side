import React from 'react';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import HowItWorks from '../HowItWorks/HowItWorks';
import SomeShoots from '../SomeShoots/SomeShoots';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <HowItWorks></HowItWorks>
      <SomeShoots></SomeShoots>
    </div>
  );
};

export default Home;