import React from 'react';
import { HeaderContainer, Logo } from './styledheader'

const Header = (props) => {

  return (
    <HeaderContainer>
      <Logo>
        <h3>NL Geodata</h3>
      </Logo>
    </HeaderContainer>
  );
};

export default Header;
