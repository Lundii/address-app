import React from 'react';
import { HeaderContainer, Logo, Logo1, SearchItem1, SearchInput1, Icon1, IconBody1 } from './styledheader'

const Header = ({path}) => {

  if(path === 'search') {
    return (
      <HeaderContainer>
        <Logo1>NL Geodata</Logo1>
        <SearchItem1>
          <SearchInput1 placeholder="enter search word" />
            <Icon1 />
        </SearchItem1>
      </HeaderContainer>
    )
  }
  else {
    return (
      <HeaderContainer home>
        <Logo>NL Geodata</Logo>
      </HeaderContainer>
    );
  }
};

export default Header;
