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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card,CardMedia,CardTitle,CardSubtitle,CardPrimary} from 'rmwc/Card';
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

class Questionnaire extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
               learning:0,
               ui:0,
               code:0,
               test:0,
               perf:0,
               snackbarIsOpen:false
                  };
  }
 handleSubmit(){
   this.setState({snackbarIsOpen: true})
 }

	

 render() {
    return (
      <div className="auditeeBox">
      <MuiThemeProvider>
      <Typography use="headline" className="title">Questionnaire</Typography>
       <List>
		<ListItem ripple>
			
			<ListItemText>Learned in last 6 months</ListItemText>
			<Rating
          value={this.state.learning}
          max={5}
          onChange={(value) => this.setState({learning:value})}
        />
			
		</ListItem>
				<ListItem ripple>
			
			<ListItemText>UI Perfection</ListItemText>
			<Rating
          value={this.state.ui}
          max={5}
          onChange={(value) => this.setState({ui:value})}
        />
			
		</ListItem>
						<ListItem ripple>
			
			<ListItemText>Code Prefection</ListItemText>
			<Rating
          value={this.state.code}
          max={5}
          onChange={(value) => this.setState({code:value})}
        />
			
		</ListItem>
								<ListItem ripple>
			
			<ListItemText>Testing tools</ListItemText>
			<	Rating
          value={this.state.test}
          max={5}
          onChange={(value) => this.setState({test:value})}
        />
			
		</ListItem>
										<ListItem ripple>
			
			<ListItemText>Perfomance testing</ListItemText>
			<Rating
          value={this.state.perf}
          max={5}
          onChange={(value) => this.setState({perf:value})}
        />
			
		</ListItem>


	   </List>

	   
	   </MuiThemeProvider>

	   <Button raised theme={['secondary-bg', 'text-primary-on-secondary']} id="submitButton" onClick={this.handleSubmit.bind(this)}>Submit</Button>
	   	   <Snackbar
					show={this.state.snackbarIsOpen}
					onClose={evt => this.setState({snackbarIsOpen: false})}
					message="Submitted"
					actionText="Dismiss"
		        />
      </div>

    );
  }
}
export default Questionnaire