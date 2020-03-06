import React from 'react';
import AboutScreen from './screens/about';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

const defaultAppPath = '/about';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={AboutScreen} />
        <Redirect to={defaultAppPath} />
      </Switch>
    </Router>
  );
}

export default App;
