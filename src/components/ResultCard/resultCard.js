import React from 'react';
import { CardContainer, Street, City, Score } from './styledResultCard'

const ResultCard = () => {

  return (
    <CardContainer>
      <Street>s Gravesandestraat 1</Street>
      <City>5612JM Eindhoven</City>
      <Score>1.0899068</Score>
    </CardContainer>
  );
};

export default ResultCard;
