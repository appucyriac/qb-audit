import React from 'react'
import Comment from './Comment';
import '../assets/css/qbaudit-styles.css'
import '../../node_modules/material-components-web/dist/material-components-web.css'
import { Button } from 'rmwc/Button';
import { Typography } from 'rmwc/Typography';
import { Snackbar } from 'rmwc/Snackbar';
import { Rating } from 'material-ui-rating';
import RatingComponent from './RatingComponent';
import { List,ListItem,ListItemText } from 'rmwc/List';	
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import auditee from '../assets/auditee.json';

class Questionnaire extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
               learning:0,
               ui:0,
               code:0,
               test:0,
               perf:0,
               snackbarIsOpen:false,
                  };
  }

 handleSubmit(){
   this.setState({snackbarIsOpen: true})
   console.log(auditee);
   let currentValues = this.state,
       avg= (currentValues.learning+currentValues.ui+currentValues.code+currentValues.test+currentValues.perf)/5;
   auditee.auditeeList.map(function(value){
    	       if(value.id == localStorage.getItem('id'))
    	       	   {   	       	   	   	       	    
    	       	   	value.history.map(function(data){
    	       	   		if(data.duration==localStorage.getItem('duration'))
    	       	   		{
                      data.rating.learning=currentValues.learning;
                      data.rating.ui=currentValues.ui;
                      data.rating.code=currentValues.code;
                      data.rating.test=currentValues.test;
                      data.rating.perf=currentValues.perf;
                      data.aggregate=avg;}
                    })
    	       	    }                  
                  })
   
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

      <div className="auditeeBox">      
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
						timeout="500"
			        />
			        <Comment id={localStorage.getItem('id')} duration={localStorage.getItem('duration')}/>
     </div>
    );
  }
}
export default Questionnaire