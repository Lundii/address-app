import React from 'react';
import { HomePageContainer, BackgroundImage  } from './styledHomePage';
import Header from '../../components/header';
import HomeComponents from '../../components/homeComponents';

const HomePage = () => {
  return (
    <HomePageContainer>
      <BackgroundImage />
      <Header />
      <HomeComponents />
    </HomePageContainer>
  );
};

export default HomePage;
