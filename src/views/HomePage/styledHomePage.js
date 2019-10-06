import styled from 'styled-components';
import image from '../../images/mapimg4.jpg';

export const HomePageContainer = styled.div`
  width: 100%;
  position: relative;
`
export const BackgroundImage = styled.div `
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: blur(1px);
  -webkit-filter: blur(1px);
  height: 640px;
  width: 360px;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
`