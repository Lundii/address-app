/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useContext } from 'react';
import { AddressContext } from '../../context/addressContext';
import { getSearchResults } from '../../utils';
import { PaginationContainer, Label, Label2, Label3, Label4, InputContainer, ItemsPerPage} from './styledPagination';


const Pagination = () => {

  const [addressData, updateAddressData] = useContext(AddressContext);

  const {searchQuery, page, itemsPerPage, totalPages} = addressData;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     getSearchResults(addressData, updateAddressData);
  //   }
  //   fetchData();
  // }, [page, itemsPerPage])

  const handleKeyUp = (e) => {
      e.persist();
     if (e.keyCode === 13) {
       getSearchResults(addressData, updateAddressData);
     }
  }
  const handleChange = async (e, field) => {
    const { value } = e.target;

    updateAddressData(prevState => ({ ...prevState, error: ''}));
    e.persist();
    if (field === 'itemsPerPage' && value < 10) {
      return updateAddressData(prevState => ({ ...prevState, error: "Items per page must be at least 10"}));
    }
    if (field === 'itemsPerPage' && value > totalPages) {
      return updateAddressData(prevState => ({ ...prevState, error: "Exceeded the total amount of pages"}));
    }
    if (field === 'page' && value < 1) {
      return updateAddressData(prevState => ({ ...prevState, error: "Page must be at least 1"}));
    }
    updateAddressData(prevState => ({ ...prevState, [`${field}`]: value}));
    e.preventDefault();
  };

  return (
    <PaginationContainer>
      <Label>Search result for {searchQuery}</Label>
      <InputContainer>
        <Label2>Items per page</Label2>
        <ItemsPerPage 
          type="number"
          min="10"
          defaultValue={itemsPerPage} 
          onChange={(e) => {handleChange(e, 'itemsPerPage')}}
          onKeyUp={(e) => {handleKeyUp(e)}}
        />
        <Label3>Pages</Label3>
        <ItemsPerPage 
          type="number"
          min="1"
          defaultValue={page} 
          onChange={(e) => {handleChange(e, 'page')}}
          onKeyUp={(e) => {handleKeyUp(e)}}
        />
        <Label4>of {totalPages}</Label4>
        
      </InputContainer>
    </PaginationContainer>
  );
};

export default Pagination;
