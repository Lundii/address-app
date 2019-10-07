import React, {useContext} from 'react';
import { withRouter } from 'react-router-dom';
import { AddressContext } from '../../context/addressContext';
import {updateSearchQuery, getSearchResults} from '../../utils';
import { HeaderContainer, Logo, Logo1, SearchItem1, SearchInput1, Icon1, StyledLink } from './styledheader'

const Header = (props) => {

const [addressData, updateAddressData] = useContext(AddressContext);

  const handleKeyUp = (e) => {
      e.persist();
     if (e.keyCode === 13) {
       getSearchResults(addressData, updateAddressData);
       props.history.push('/search');
     }
  }

  if(props.path === 'search') {
    return (
      <HeaderContainer>
        <StyledLink to="/">
          <Logo1>NL Geodata</Logo1>
        </StyledLink>
        <SearchItem1>
          <SearchInput1 placeholder="enter search word" 
           onChange={(e) => {updateSearchQuery(e, updateAddressData)}}
           onKeyUp={(e) => {handleKeyUp(e)}}
          />
          <StyledLink to="/search"><Icon1 onClick={() => {getSearchResults(addressData, updateAddressData)}}/></StyledLink>
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

export default withRouter(Header);
