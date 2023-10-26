
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/layout/layout';


function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' component={Layout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
