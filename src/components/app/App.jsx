import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../containers/Home';
import History from '../pages/History';


const App = () => {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Home {...routerProps} />}
          />
          <Route
            path="/history"
            exact
            render={(routerProps) => <History {...routerProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
