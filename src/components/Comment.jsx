import React from 'react'
import '../assets/css/qbaudit-styles.css'
import '../../node_modules/material-components-web/dist/material-components-web.css'
import { Button } from 'rmwc/Button';
import { Typography } from 'rmwc/Typography';
import { Snackbar } from 'rmwc/Snackbar';
import { Rating } from 'material-ui-rating';
import { FormField } from 'rmwc/FormField';
import { TextField } from 'rmwc/TextField';
import { List,ListItem,ListItemText } from 'rmwc/List';	
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const TABLE_COLUMNS = [
  {
    key: 'name',
    label: 'Name',
  }, {
    key: 'duration',
    label: 'Duration',
  },
]
const TABLE_DATA = [
  {
    name: 'Deadpool',
    duration: 'April 2017 - November 2017',

  }, {
    name: 'Tony Stark',
    duration: 'December 2016 - April 2017',
   
  }

]

class Comment extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      comment:""
                  };
  }
 handleSubmit(){
   this.setState({snackbarIsOpen: true})
 }

handleRating = (keyLabel, rating) =>{
  this.setState((state) => {
      let newState = state;
      newState[keyLabel] = rating;
      return newState;
  });
}

 render() {
    return (
      <div classname="commentBox">
            <label id="commentField">
              <FormField>
              <TextField label="Add Comments" id="commentBox" onChange = {(event,newValue) => this.setState({comment:event.target.value})}/>
              </FormField>
            </label>
		   <Button stroked  onClick={this.handleSubmit.bind(this)} id="commentButton">Add Comment</Button>
		   	   <Snackbar
						show={this.state.snackbarIsOpen}
						onClose={evt => this.setState({snackbarIsOpen: false})}
						message="Comment Added"
						actionText="Dismiss"
			        />
      </div>

    );
  }
}
export default Comment