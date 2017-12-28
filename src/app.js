import Login from './components/Login'
import Auditee from './components/Auditee'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
ReactDOM.render((

  <BrowserRouter>
          <div>
            <Route path="/"  component={Login}></Route>
            <Route path="/auditee" component={Auditee}></Route>
          </div>
  </BrowserRouter>
), document.getElementById('root'))