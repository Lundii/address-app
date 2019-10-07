import React, {useContext} from 'react';
import { AddressContext } from '../../context/addressContext';
import {updateSearchQuery, getSearchResults} from '../../utils';
import { HeaderContainer, Logo, Logo1, SearchItem1, SearchInput1, Icon1, StyledLink } from './styledheader'

const Header = ({path}) => {

const [addressData, updateAddressData] = useContext(AddressContext);

  if(path === 'search') {
    return (
      <HeaderContainer>
        <StyledLink to="/">
          <Logo1>NL Geodata</Logo1>
        </StyledLink>
        <SearchItem1>
          <SearchInput1 placeholder="enter search word" 
          onChange={(e) => {updateSearchQuery(e, updateAddressData)}}
          />
            <Icon1 onClick={() => {getSearchResults(addressData, updateAddressData)}}/>
        </SearchItem1>
      </HeaderContainer>
    )
  }
  else {
    return (
      <HeaderContainer home>
        <StyledLink to="/">
          <Logo>NL Geodata</Logo>
        </StyledLink>
      </HeaderContainer>
    );
  }
};

export default Header;
