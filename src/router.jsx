import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GameList from './GameList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/lists/1/games" component={GameList} />
        <Route exact path="/lists/2/games" component={GameList} />
        <Route exact path="/games" component={GameList} />
      </Switch>
    </Router>
  );
};

export default App;
