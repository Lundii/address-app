/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AddressContext } from '../../context/addressContext';
import { getSearchResults, updateSearchQuery} from '../../utils'
import {HomeContainer, SearchInput, Items, Label, SearchItem, IconBody, Icon} from './styedHome';

const HomeComponent = (props) => {
   
  const [addressData, updateAddressData] = useContext(AddressContext);
   
   useEffect(() => {
      updateAddressData(prevState => ({...prevState, page: 1, itemsPerPage: 20, totalPages: 1}))
   }, [])

  const handleKeyUp = (e) => {
    e.persist();
    if (e.keyCode === 13) {
      getSearchResults(addressData, updateAddressData);
      props.history.push('/search');
    }
  }

  return (
    <HomeContainer>
    <Items>
      <Label>Search for addresses</Label>
      <SearchItem>
        <SearchInput 
          placeholder="enter search word" 
          onChange={(e) => {updateSearchQuery(e, updateAddressData)}}
          onKeyUp={(e) => {handleKeyUp(e)}}
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
