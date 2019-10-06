import React from 'react';
import { CardContainer, Street, City, Score } from './styledResultCard'

const ResultCard = ({city, street, score}) => {

  return (
    <CardContainer>
      <Street>{street}</Street>
      <City>{city}</City>
      <Score>{score}</Score>
    </CardContainer>
  );
};

export default ResultCard;
