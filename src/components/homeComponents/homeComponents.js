import React, { useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AddressContext } from '../../context/addressContext';
import { getSearchResults, updateSearchQuery} from '../../utils'
import {HomeContainer, SearchInput, Items, Label, SearchItem, IconBody, Icon} from './styedHome';

const HomeComponent = () => {
   
  const [addressData, updateAddressData] = useContext(AddressContext);
  
  return (
    <HomeContainer>
    <Items>
      <Label>Search for addresses</Label>
      <SearchItem>
        <SearchInput 
          placeholder="enter search word" 
          onChange={(e) => {updateSearchQuery(e, updateAddressData)}}
        />
        <Link to="/search"><IconBody onClick={() => {getSearchResults(addressData, updateAddressData)}}>
          <Icon />
        </IconBody></Link>
      </SearchItem>
    </Items>
    </HomeContainer>
  )
};

export default withRouter(HomeComponent);
