import React, { useState, createContext } from 'react';

export const AddressContext = createContext();

export const AddressProvider = (props) => {
  const [addressData, updateAddressData] = useState({
    searchQuery: '',
    queryResult: {},
    details: {},
    page: 1,
    itemsPerPage: 20
  });

  return (
    <AddressContext.Provider value={[addressData, updateAddressData]}>
      {props.children}
    </AddressContext.Provider>
  )
}