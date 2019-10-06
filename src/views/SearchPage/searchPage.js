import React, { useContext } from 'react';
import { AddressContext } from '../../context/addressContext';
import ResultCard from '../../components/ResultCard';
import Header from '../../components/header';
import { SearchContainer, SearchItems, Loading } from './styledSearchPage';

const SearchPage = () => {
  
  const [addressData] = useContext(AddressContext);
  const { queryResult } = addressData;

  const displayResult = () => {
    const addresses = queryResult.docs
    return addresses.map((address, index) => {
      const city_street = address.weergavenaam.split(",");

      return (
        <ResultCard 
          key={index}
          street={city_street[0]}
          city={city_street[1]}
          score={address.score}
        />
      );
    });
  }

  let addresses; 
  if (queryResult && queryResult.docs) {
    addresses = displayResult();
  }

  return (
    <SearchContainer>
      <Header path="search"/>
        <SearchItems>
          {!addresses ? <Loading>Loading...</Loading> : addresses}
        </SearchItems>
    </SearchContainer>
  )
}

export default SearchPage;
