import React from 'react';
import { HeaderContainer, Logo, Logo1, SearchItem1, SearchInput1, Icon1, IconBody1 } from './styledheader'

const Header = (props) => {

  return (
    <HeaderContainer>
      <Logo>NL Geodata</Logo>
    </HeaderContainer>
  );

  // return (
  //   <HeaderContainer>
  //     <Logo1>NL Geodata</Logo1>
  //     <SearchItem1>
  //       <SearchInput1 placeholder="enter search word" />
  //         <Icon1 />
  //     </SearchItem1>
  //   </HeaderContainer>
  // )
};

export default Header;
