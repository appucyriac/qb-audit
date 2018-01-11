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
import auditee from '../assets/auditee.json';

class Comment extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      comment:""
                  };

  }
 handleSubmit(){
      let id=this.props.id,
        duration=this.props.duration;
   let comment=this.state.comment;
   auditee.auditeeList.map(function(value){
   if(value.id==id)
  {
   value.history.map(function(data){
    if(data.duration==duration)
    {
    data.comment=comment;
  }
   })}
   })
   this.setState({snackbarIsOpen: true})
 }


 render() {
    return (
      <div className="commentBox">
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
            timeout="500"
			        />
      </div>

    );
  }
}
export default Comment