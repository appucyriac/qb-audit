import React from 'react'
import '../assets/css/qbaudit-styles.css'
import '../../node_modules/material-components-web/dist/material-components-web.css'
import { Button } from 'rmwc/Button';
import { FormField } from 'rmwc/FormField';
import { TextField } from 'rmwc/TextField';
import { Checkbox } from 'rmwc/Checkbox';
import { Elevation } from 'rmwc/Elevation';
import { Typography } from 'rmwc/Typography';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Thanks for logging in ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="formBox">
	      <form onSubmit={this.handleSubmit} className="loginForm">
		        <label id="nameField">
	            <FormField>
		          <TextField label="User Name" id="nameField" />
	            </FormField>
		        </label>
		          <label id="passwordField">
	            <FormField>
		          <TextField label="Password" id="passwordField" type="password"/>
	            </FormField>
		        </label>
		        <Checkbox>Stay signed in</Checkbox>
		        <Button raised theme={['secondary-bg', 'text-primary-on-secondary']} id="submitButton" >Login</Button>
	      </form>
      </div>
    );
  }
}
export default Login