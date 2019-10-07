import React, { useEffect, useContext } from 'react';
import { AddressContext } from '../../context/addressContext';
import { DetailsContainer, Details, Label2, Label3 } from './styledDetails';

const DetailsComponent = ({id}) => {
  
  const [addressData, updateAddressData] = useContext(AddressContext);
  const { details } = addressData;

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`https://geodata.nationaalgeoregister.nl/locatieserver/v3/lookup?id=${id}`);
      const details = await response.json();
      updateAddressData(prevState => ({ ...prevState, details: details.response}))
    }
    fetchDetails();
  }, [])

  const getDetails = () => {
    const { docs } = details;
    const keys = Object.keys(docs[0])
    return keys.map((key, index) => {
      return (
        <Details key={index}>
          <Label2>{key}</Label2>
          <Label3>{docs[0][`${key}`]}</Label3>
        </Details>
      )
    });
  };

  let addressDetails;
  if ( details.docs && details.docs.length){
    addressDetails = getDetails();
  }
  return( 
    <DetailsContainer>
       {addressDetails}
    </DetailsContainer>
  ) 
};

export default DetailsComponent;
