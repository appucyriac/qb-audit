import Login from './components/Login'
import Auditee from './components/Auditee'
import Auditor from './components/Auditor'
import { Snackbar } from 'rmwc/Snackbar';
import Organizer from './components/Organizer'
import Questionnaire from './components/Questionnaire'
import React from 'react'
import { Button } from 'rmwc/Button';
import { Tabs } from 'rmwc/Tabs';
import BackgroundImage from 'react-background-image-loader';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
let sessionButton="";
class App extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
        isLogged:"",
        notLogged:"",
        snackbarIsOpen:false
                  };

  }
  handleLogout() {
   
   localStorage.setItem('isLogged',false);
   this.setState({snackbarIsOpen:true});

  }

 render() {
     const session = localStorage.getItem("isLogged");
     let   type=localStorage.getItem("type");
    if(session=="true")
    	sessionButton=<nav><Link to="/login"><Button onClick={this.handleLogout.bind(this)}>Logout</Button></Link><Link to={"/"+type}><Button>Dashboard</Button></Link></nav>;
    else
    	sessionButton=<nav><Link to="/login"><Button>Login</Button></Link><Link to="/"><Button>Home</Button></Link></nav>;

 return(
  <div>
      {sessionButton}
    <div className="title">

    </div>
    <div>
      <Route path="/login" component={Login}/>
      <Route path="/auditee" component={Auditee}/>
      <Route path="/auditor" component={Auditor}/>
      <Route path="/questionnaire" component={Questionnaire}/>
      <Route path="/organizer" component={Organizer}/>
    </div>
    <Snackbar
	show={this.state.snackbarIsOpen}
	onClose={evt => this.setState({snackbarIsOpen: false})}
    message="Successfully Logged Out"
    actionText="Dismiss"
    timeout="500"
    />
  </div>
  );
  }
}

ReactDOM.render((
  
  <HashRouter>
            <App/>
  </HashRouter>
), document.getElementById('root'))