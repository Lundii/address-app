/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { AddressContext } from '../../context/addressContext';
import { PaginationContainer, Label, Label2, Label3, Label4, InputContainer, ItemsPerPage} from './styledPagination';


const Pagination = () => {

  const [addressData, updateAddressData] = useContext(AddressContext);

  const {searchQuery, queryResult, page, itemsPerPage} = addressData;
  const totalPages = Math.floor(queryResult.numFound/itemsPerPage)

  useEffect(() => {
    const fetchData = async () => {
      console.log(page);
      console.log(queryResult.numFound);
      const response = await fetch(`https://geodata.nationaalgeoregister.nl/locatieserver/v3/suggest?fq=type:adres&q=${searchQuery}&start=${page}&rows=${itemsPerPage}&fq=*:*`);
      const addresses = await response.json();
      console.log(addresses);
      updateAddressData(prevState => ({...prevState, queryResult: {...addresses.response}}));
    }
    fetchData();
  }, [page, itemsPerPage])

  const handleChange = async (e, field) => {
    e.persist();
    updateAddressData(prevState => ({ ...prevState, [`${field}`]: e.target.value, queryResult: {}}));
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
        />
        <Label3>Pages</Label3>
        <ItemsPerPage 
          type="number"
          min="1"
          defaultValue={page} 
          onChange={(e) => {handleChange(e, 'page')}}
        />
        <Label4>of {totalPages}</Label4>
        
      </InputContainer>
    </PaginationContainer>
  );
};

export default Pagination;
