import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 130px;
  background-color: rgb(229,229,229);
  top: 200px;
  left: 80px;
  z-index: 100;
  display: ${props => props.error.length ? 'block' : 'none'}
`

export const Label = styled.div`
  font-size: 17px;
  font-family: 'Bitter', serif;
  padding: 10px;
  text-align: center;
`

export const Message = styled.div`
  padding: 10px;
  font-family: 'Quicksand', sans-serif;
  color: red;
`

export const Input = styled.input `
  width: 100%;
  padding: 12px;
  color: white;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  background-color: rgb(32, 32, 96)
`