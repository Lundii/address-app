import React from 'react';
import {HomeContainer, SearchInput, Items, Label, SearchItem, IconBody, Icon} from './styedHome';

const HomeComponent = () => {

  return (
    <HomeContainer>
    <Items>
      <Label>Search for addresses</Label>
      <SearchItem>
        <SearchInput placeholder="enter search word" />
        <IconBody>
          <Icon />
        </IconBody>
      </SearchItem>
    </Items>
    </HomeContainer>
  )
};

export default HomeComponent;
