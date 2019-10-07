import React, { useContext, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AddressContext } from '../../context/addressContext';
import {HomeContainer, SearchInput, Items, Label, SearchItem, IconBody, Icon} from './styedHome';

const HomeComponent = (props) => {
   
  const [addressData, updateAddressData] = useContext(AddressContext);
  
  const { searchQuery } = addressData;

  const updateSearchQuery = (e) => {
    const { value } = e.target;
    updateAddressData(prevState => ({...prevState, searchQuery: value}))
    e.preventDefault();
  };

  const getSearchResults = async () => {
    const response = await fetch(`https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?fq=type:adres&q=${searchQuery}&start=0&rows=20&fq=*:*`);
    const addresses = await response.json();
    updateAddressData(prevState => ({...prevState, queryResult: {...addresses.response}}));
  }
  return (
    <HomeContainer>
    <Items>
      <Label>Search for addresses</Label>
      <SearchItem>
        <SearchInput 
          placeholder="enter search word" 
          onChange={(e) => {updateSearchQuery(e)}}
        />
        <Link to="/search"><IconBody onClick={() => {getSearchResults()}}>
          <Icon />
        </IconBody></Link>
      </SearchItem>
    </Items>
    </HomeContainer>
  )
};

export default withRouter(HomeComponent);
