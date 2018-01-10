import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/css/qbaudit-styles.css'
import '../../node_modules/material-components-web/dist/material-components-web.css'
import { Button } from 'rmwc/Button';
import { FormField } from 'rmwc/FormField';
import { TextField } from 'rmwc/TextField';
import { Checkbox } from 'rmwc/Checkbox';
import { Elevation } from 'rmwc/Elevation';
import { Typography } from 'rmwc/Typography';
import DataTables from 'material-ui-datatables';
import { Grid,GridCell } from 'rmwc/Grid';
import { Snackbar } from 'rmwc/Snackbar';
import {Card,CardMedia,CardTitle,CardSubtitle,CardPrimary} from 'rmwc/Card';
import { List,ListItem,ListItemText } from 'rmwc/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' ;
import auditee from '../assets/auditee.json';
let status="";

class Status extends React.Component {
constructor(props) {
    super(props);

    let id=this.props.auditeeId;
    auditee.auditeeList.map(function(value){
             if(value.id == id)
                 {                                
                  value.history.map(function(data){
                  if(data.duration==duration)
                  {
                    status = data.status;
                  }
                })
              }})
        this.state = {
      completed:status
                  };

  }
handleCompleted(value){
  
  
  debugger
  let duration =this.props.duration,
      id=this.props.auditeeId;

 this.setState({completed:"Completed"});
 auditee.auditeeList.map(function(value){
   debugger
             if(value.id == id)
                 {                
                  
                  
                  value.history.map(function(data){
                  if(data.duration==duration)
                  {
                    data.status= "Completed";
                  }
                })
              }})
 console.log(auditee);
}

 render() {
    return (
      <div>
	        <MuiThemeProvider> 
          <List>
             <ListItem ripple>   
              <ListItemText>Half yearly</ListItemText>     
             </ListItem>
             <ListItem ripple>      
              <ListItemText>Inprogress</ListItemText>
             </ListItem>
            <ListItem ripple>      
              <ListItemText>Aggregate rating</ListItemText>       
            </ListItem>
            <ListItem ripple>      
              <ListItemText>{this.state.completed}</ListItemText>          
             </ListItem>
         </List>
		      <Button raised theme={['secondary-bg', 'text-primary-on-secondary']} className="assignButton" onClick={this.handleCompleted.bind(this)}>Mark as completed</Button>
		      </MuiThemeProvider>
      </div>
    );
  }
}
export default Status