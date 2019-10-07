import styled from 'styled-components';

export const PaginationContainer = styled.div`
  padding: 8px;
  box-sizing: border-box;
`

export const Label = styled.div`
  font-size: 14px;
  color: black;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
`

export const Label2 = styled(Label)`
  font-size: 12px;
  padding-top: 10px;
  font-weight: 300;
  margin: 4px;
`
export const Label3 = styled(Label2)`
  margin: 4px;
  margin-left: auto;
`
export const Label4 = styled(Label2)`
`

export const InputContainer = styled.div`
  display: flex;
`

export const ItemsPerPage = styled.input`
  width: 40px;
  margin: 8px 0 0 11px;
  text-align: center;
  font-size: 12px;
  border: 0;
  border-bottom: 1px solid black;
`

