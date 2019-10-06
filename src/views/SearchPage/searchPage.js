import React from 'react';
import ResultCard from '../../components/ResultCard';
import Header from '../../components/header';
import { SearchContainer } from './styledSearchPage';

const SearchPage = () => {
  
  return (
    <SearchContainer>
      <Header />
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
    </SearchContainer>
  )
}

export default SearchPage;
