import React from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";
import HomePage from './views/HomePage';
import SearchPage from './views/SearchPage';
import DetailsPage from './views/detailsPage';
import { AddressProvider } from './context/addressContext';
import { Wrapper } from './styledApp';

function App() {
  return (
    <AddressProvider>
      <HashRouter basename="/">
        <Wrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} /> 
          <Route path="/search/:id" component={DetailsPage} />
        </Switch>
        </Wrapper>
      </HashRouter>
    </AddressProvider>
  );
}

export default App;
