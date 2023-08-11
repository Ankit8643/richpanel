import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Subscription from './views/subscription'
import SignUp from './views/sign-up'
import Login from './views/login'
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();
const App = () => {
  return (
    <Router history={history}>
      <div>
        <Route component={Subscription} exact path="/subscription" />
        <Route component={SignUp} exact path="/" />
        <Route component={Login} exact path="/login" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
