import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const CardContainer = styled.div`
  width: 288px;
  height: 75px;
  background-color: rgb(32, 32, 96);
  padding: 10px;
  margin: 0 auto;
  margin-top: 16px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  color: white;
  cursor: pointer;
`

export const Street = styled.label`
  font-size: 14px;
  padding-top: 4px;
  font-family: 'Bitter', serif;
`

export const City = styled(Street)`
  font-size: 12px;
  font-weight: 100;
  font-family: 'Quicksand', sans-serif;
`

export const Score = styled(City)`
  margin-left: auto;
`