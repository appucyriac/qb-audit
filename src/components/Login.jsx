import React from 'react'
import '../assets/css/qbaudit-styles.css'
import '../../node_modules/material-components-web/dist/material-components-web.css'
import { Button } from 'rmwc/Button';
import { FormField } from 'rmwc/FormField';
import { TextField } from 'rmwc/TextField';
import { Checkbox } from 'rmwc/Checkbox';
import { Elevation } from 'rmwc/Elevation';
import { Typography } from 'rmwc/Typography';
import users from '../assets/users.json';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
let type="";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	          username:"",
                  password:"",
                  type:""
                  };
                  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  	const name=this.state.username;
  	const pass=this.state.password;
    users.userlist.map(function(value){

    	       if((name == value.name) && (pass ==value.password))
    	       	   {
    	       	   	if (value.type =="auditee")
                      type ="auditee";
                    if (value.type =="auditor")
                       type ="auditor";
                    if (value.type =="organizer")
                      type ="organizer";
    	       	   }                   
                  })
    if(type =="")
      alert("invalid user name or password")
    else
      {
      	 this.setState({type:type});
         localStorage.setItem('isLogged',true);
      }
    
  }

  render() {
  	if(this.state.type != "")
  		 return (<Redirect from={"/login"} to={"/"+this.state.type}/>);

  	else{
    return (
      <div className="formBox">
	      <form className="loginForm">
		        <label id="nameField">
	            <FormField>
		          <TextField label="User Name" id="nameField" onChange = {(event,newValue) => this.setState({username:event.target.value})}/>
	            </FormField>
		        </label>
		          <label id="passwordField">
	            <FormField>
		          <TextField label="Password" id="passwordField" type="password" onChange = {(event,newValue) => this.setState({password:event.target.value})}/>
	            </FormField>
		        </label>
		        <Checkbox>Stay signed in</Checkbox>
		        <Button raised theme={['secondary-bg', 'text-primary-on-secondary']} id="loginButton" onClick={this.handleSubmit}>Login</Button>
	      </form>
      </div>
    );
  }
}
}
export default Login