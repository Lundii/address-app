import styled from 'styled-components';

export const DetailsContainer = styled.div`
  margin: 15px;
  padding: 15px;
  background-color: rgb(32, 32, 96);
  height: 520px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
export const Details = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`
export const Label2 = styled.div`
  font-family: 'Quicksand', sans-serif;
  color: white;
  font-size: 14px;
  padding: 5px;
`

export const Label3 = styled(Label2)`
`