import styled from 'styled-components';
import image from '../../images/mapimg5.png';

export const HomeContainer = styled.div`
  margin: 0 auto;
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 190px;
`
export const Label = styled.h4`
  margin: 10px auto;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 10px;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
`

export const SearchItem = styled.div`
  display: flex;
  margin: 0 auto;
  }
`

export const SearchInput = styled.input`
  padding: 10px;
  border: 0;
  border-radius: 10px;
  background-color: rgba(253, 253, 255);
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  font-weight: 300;
`

export const IconBody = styled.div`
  margin-left: 10px;
  padding: 10px;
  width: 35px;
  padding: 10px;
  background-color: black;
  border-radius: 10px;
  cursor: pointer;
`

export const Icon = styled.div`
  height: 24px;
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`
