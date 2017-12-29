import React from 'react'
import '../assets/css/qbaudit-styles.css'
import '../../node_modules/material-components-web/dist/material-components-web.css'
import { Button } from 'rmwc/Button';
import { FormField } from 'rmwc/FormField';
import { TextField } from 'rmwc/TextField';
import { Checkbox } from 'rmwc/Checkbox';
import { Elevation } from 'rmwc/Elevation';
import { Typography } from 'rmwc/Typography';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	          username:"",
                  password:"",
                  isLogged:false
                  };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  
    console.log(this.state) ;
    if(this.state.username == "auditee")
       this.setState({isLogged:true});
    else 
       alert("invalid username");
    
    
  }

  render() {
  	const logged = this.state.isLogged;
  	if(logged)
  		 return (<Redirect from={"/login"} to={"/auditee"}/>);
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
		        <Button raised theme={['secondary-bg', 'text-primary-on-secondary']} id="submitButton" onClick={this.handleSubmit}>Login</Button>
	      </form>
      </div>
    );
  }
}
}
export default Login