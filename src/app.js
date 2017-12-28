import Login from './components/Login'
import Auditee from './components/Auditee'
import React from 'react'
import { Button } from 'rmwc/Button';
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const App = () => (
  <div>
    <nav>
      <Link to="/login"><Button>Login</Button></Link>
       <Link to="/login"><Button>About</Button></Link>
    </nav>
    <div>
      <Route path="/login" component={Login}/>
    </div>
  </div>
)
ReactDOM.render((

  <BrowserRouter>
            <App/>
  </BrowserRouter>
), document.getElementById('root'))