import React from 'react';
import Header from '../../components/header';
import DetailsComponent from '../../components/detailsComponent';
import { DetailsPageContainer, Label1 } from './styledDetails';

const DetailsPage = (props) => {
  const { id } = props.match.params;

  return(
    <DetailsPageContainer>
      <Header path="search" />
      <Label1>More Information</Label1>
      <DetailsComponent id={id} />
    </DetailsPageContainer>
  );
};

export default DetailsPage;
