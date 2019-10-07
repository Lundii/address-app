import React from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";
import HomePage from './views/HomePage';
import SearchPage from './views/SearchPage';
import DetailsPage from './views/detailsPage';
import MessageModal from './components/messageModal';
import { AddressProvider } from './context/addressContext';
import { Wrapper } from './styledApp';

function App() {
  return (
    <AddressProvider>
      <HashRouter basename="/">
        <Wrapper>
        <MessageModal />
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
