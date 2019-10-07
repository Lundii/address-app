import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, Street, City, Score, StyledLink } from './styledResultCard'

const ResultCard = ({id, city, street, score}) => {

  return (
    <StyledLink to={`/search/${id}`}>
      <CardContainer>
        <Street>{street}</Street>
        <City>{city}</City>
        <Score>{score}</Score>
      </CardContainer>
    </StyledLink>
  );
};

export default ResultCard;
