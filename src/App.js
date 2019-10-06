import React from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";
import HomePage from './views/HomePage';
import { AddressProvider } from './context/addressContext';
import SearchPage from './views/SearchPage';
import { Wrapper } from './styledApp';

function App() {
  return (
    <AddressProvider>
      <HashRouter basename="/">
        <Wrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} /> 
        </Switch>
        </Wrapper>
      </HashRouter>
    </AddressProvider>
  );
}

export default App;
