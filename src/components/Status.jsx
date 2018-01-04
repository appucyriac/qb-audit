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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' 
const Auditor_List =[{name:'Bruce'},{name:'Peter'},{name:'Vision'}]

class Status extends React.Component {

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
              <ListItemText>Code Prefection</ListItemText>
            </ListItem>
            <ListItem ripple>      
              <ListItemText>Aggregate rating</ListItemText>       
            </ListItem>
            <ListItem ripple>      
              <ListItemText>Not Completed</ListItemText>          
             </ListItem>
         </List>
		      <Button raised theme={['secondary-bg', 'text-primary-on-secondary']} className="assignButton">Mark as completed</Button>
		      </MuiThemeProvider>
      </div>
    );
  }
}
export default Status