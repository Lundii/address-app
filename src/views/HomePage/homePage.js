import React from 'react';
import { HomePageContainer  } from './styledHomePage';
import Header from '../../components/header';
import HomeComponents from '../../components/homeComponents';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header />
      <HomeComponents />
    </HomePageContainer>
  )
}

export default HomePage;
