import React, { useState, createContext } from 'react';

export const AddressContext = createContext();

export const AddressProvider = (props) => {
  const [addressData, updateAddressData] = useState({
    searchQuery: '',
    queryResult: {}
  });

  return (
    <AddressContext.Provider value={[addressData, updateAddressData]}>
      {props.children}
    </AddressContext.Provider>
  )
}