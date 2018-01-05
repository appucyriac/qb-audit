import React from 'react'
import '../assets/css/qbaudit-styles.css'
import '../../node_modules/material-components-web/dist/material-components-web.css'
import { Button } from 'rmwc/Button';
import { Typography } from 'rmwc/Typography';
import { Snackbar } from 'rmwc/Snackbar';
import { Rating } from 'material-ui-rating';
import RatingComponent from './RatingComponent';
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

handleRating = (keyLabel, rating) =>{
  this.setState((state) => {
      let newState = state;
      newState[keyLabel] = rating;
      return newState;
  });
}

 render() {
    return (
      <div>      
	      <MuiThemeProvider>
		       <List>
				<ListItem ripple>		
					<ListItemText>Learned in last 6 months</ListItemText>			
		            <RatingComponent rating={this.state.learning} keyLabel="learning" func={this.handleRating}/> 			
				</ListItem>
				 <ListItem ripple>			
					<ListItemText>UI Perfection</ListItemText>
					<RatingComponent rating={this.state.ui} keyLabel="ui" func={this.handleRating}/>			
				 </ListItem>
				  <ListItem ripple>			
					<ListItemText>Code Prefection</ListItemText>
					<RatingComponent rating={this.state.code} keyLabel="code" func={this.handleRating}/> 			
				  </ListItem>
				 <ListItem ripple>			
					<ListItemText>Testing tools</ListItemText>
					<RatingComponent rating={this.state.test} keyLabel="test" func={this.handleRating}/> 			
				 </ListItem>
				 <ListItem ripple>			
					<ListItemText>Perfomance testing</ListItemText>
					<RatingComponent rating={this.state.perf} keyLabel="perf" func={this.handleRating}/> 
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