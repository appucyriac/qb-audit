import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/qbaudit-styles.css';
import '../../node_modules/material-components-web/dist/material-components-web.css'
import { Button } from 'rmwc/Button';
import { Typography } from 'rmwc/Typography';
import DataTables from 'material-ui-datatables';
import { Snackbar } from 'rmwc/Snackbar';
import {Card,CardMedia,CardTitle,CardSubtitle,CardPrimary} from 'rmwc/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Questionnaire from './Questionnaire';
import auditee from '../assets/auditee.json';
import {
  Dialog,
  DefaultDialogTemplate,
  DialogRoot,
  DialogSurface,
  DialogHeader,
  DialogHeaderTitle,
  DialogBody,
  DialogFooter,
  DialogFooterButton,
  DialogBackdrop
} from 'rmwc/Dialog';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
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
    name: 'Luke',
    duration: 'April 2017 - November 2017',

  }, {
    name: 'Luke',
    duration: 'December 2016 - April 2017',
   
  }

]

class Auditee extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
        snackbarIsOpen:false,
        cellClick:false,
        clickedName:null,
        simpleDialogIsOpen:false
                  };
  }

	
	componentDidMount() {

		this.setState({snackbarIsOpen: !this.state.snackbarIsOpen})
  }
  handleCellClick = (tableRow, tableColumn, dataItem, dataItemField) =>{
     debugger
     	this.setState({cellClick:true,clickedName:dataItem.name});

     	    auditee.auditeeList.map(function(value){

    	       if(value.name == dataItem.name)
    	       	   {
    	       	   	localStorage.setItem('id',value.id);
    	       	   	localStorage.setItem('duration',dataItem.duration);
                    }
    	       	                 
                  })
     	
    
  }	
 render() {
 	if(this.state.cellClick)
 		 {return (<Redirect from={"/auditor"} to={"/questionnaire"}/>);}
    return (
      <div className="auditeeBox">
      <Typography use="headline" className="title">Auditor Dashboard</Typography>
	      <Card className="userImage">
				<CardMedia style={{
					backgroundImage: 'url(https://assets1.sharetribe.com/assets/profile_image/medium/missing-c54f2181aa6b87c9c74bbe1ed8876086c314ffcf318441f2f7d70daf736fc3f2.png)',
					height: '12.313rem',
					width: '12.5rem'

					
				}}>
				</CardMedia>
				<CardPrimary>
					<CardTitle large>Auditor</CardTitle>
					<CardSubtitle>Emp No: 123456</CardSubtitle>
	 			</CardPrimary>
	     </Card>
	        <Typography use="title">Auditees for this month</Typography>
	        <MuiThemeProvider> 
		      <DataTables
		        height={'auto'}
		        selectable={false}
		        showRowHover={true}
		        columns={TABLE_COLUMNS}
		        data={TABLE_DATA}
		        showCheckboxes={true}
		        onCellClick={this.handleCellClick.bind(this)}
		        onFilterValueChange={this.handleFilterValueChange}
		        
		      />
		      </MuiThemeProvider>
				<Snackbar
					show={this.state.snackbarIsOpen}
					onClose={evt => this.setState({snackbarIsOpen: false})}
					message="Welcome"
					actionText="Dismiss"
		        />

      </div>
    );
  }
}
export default Auditee