import Login from './components/Login'
import Auditee from './components/Auditee'
import Auditor from './components/Auditor'
import Organizer from './components/Organizer'
import Questionnaire from './components/Questionnaire'
import React from 'react'
import { Button } from 'rmwc/Button';
import { Tabs } from 'rmwc/Tabs';
import ReactDOM from 'react-dom'
import {
  HashRouter,
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
       <Link to="/"><Button>Home</Button></Link>
    </nav>
    <div>
      <Route path="/login" component={Login}/>
      <Route path="/auditee" component={Auditee}/>
      <Route path="/auditor" component={Auditor}/>
      <Route path="/questionnaire" component={Questionnaire}/>
      <Route path="/organizer" component={Organizer}/>
    </div>
  </div>
)
ReactDOM.render((

  <HashRouter>
            <App/>
  </HashRouter>
), document.getElementById('root'))