import React from 'react'
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
import { Rating } from 'material-ui-rating';
import { List,ListItem,ListItemText } from 'rmwc/List';	
import {Card,CardMedia,CardTitle,CardSubtitle,CardPrimary} from 'rmwc/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' 
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

class Auditee extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
        snackbarIsOpen:false
                  };
  }

	
	componentDidMount() {

		this.setState({snackbarIsOpen: !this.state.snackbarIsOpen})
  }
  handleCellClick(value){
    
    	return(
    		<div className="auditeeBox">

    		</div>
    	);
    
  }
 render() {
    return (
      <div className="auditeeBox">
      <Typography use="headline" className="title">Questionnaire</Typography>
    <List>
		<ListItem ripple>
			
			<ListItemText>Learned in last 6 months</ListItemText>
			<Rating
          value={3}
          max={5}
          onChange={(value) => console.log(`Rated with value ${value}`)}
        />
			
		</ListItem>
	</List>
          

      </div>
    );
  }
}
export default Auditee