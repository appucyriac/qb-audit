import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DataTables from 'material-ui-datatables';
import { Typography } from 'rmwc/Typography';
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
import Status from './Status';
import get from 'lodash/get';
import filter from 'lodash/filter';
const TABLE_STATUS_COLS = [
  {
    key: 'name',
    label: 'Name',
    type:'select'
  },
  {
    key: 'auditor',
    label: 'Auditor'
    
  },
  {
    key: 'progress',
    label: 'Progress',
    
  },
    {
    key: 'rating',
    label: 'Rating'
    
  },
  {
    key: 'duration',
    label: 'Duration'
    
  },
      {
    key: 'final_status',
    label: 'Final Status'
   
  }
]
 
const TABLE_STATUS_DATA = [
  {
    name: 'Luke',
    auditor:'Tony',
    progress:'In Progress',
    rating:'3',
    duration:'April 2017 - November 2017',
    final_status:'Not Completed'
    

  }, {
    name: 'Luke',
    auditor:'Tony',
    progress:'In Progress',
    rating:'4',
    duration:'December 2016 - April 2017',
    final_status:'Not Completed'
   
  }
]
export default class StatusBox extends Component {
  
constructor(props) {
    super(props);
    this.state = {
        simpleDialogIsOpen:false,
        clickedName:null,
        clickedId:0,
        clickedDuration:"",
        searchResults:TABLE_STATUS_DATA,
                  };
  }
onCellClick(tableRow, tableColumn, dataItem, dataItemField){
	let id=0,
	    duration="";
	this.setState({simpleDialogIsOpen:true,clickedName:dataItem.name});
	auditee.auditeeList.map(function(value){

    	       if(value.name == dataItem.name)
    	       	   {
                      id=value.id;
                     duration=dataItem.duration;
                    }
    	       	                 
                  })

	this.setState({clickedId:id});

	this.setState({clickedDuration:duration});
}
handleFilterValueChange(args) {
    debugger
    if(args==null|| args=="")
    	this.setState({searchResults:TABLE_STATUS_DATA});
    else
    {
     let results = filter(TABLE_STATUS_DATA,{'name':args});
     this.setState({searchResults:results});
  }}
  render() {
    return (
        <div className="statusBox">
	        <Typography use="title">Status of audits</Typography>
	        <MuiThemeProvider> 
		      <DataTables
		        height={'auto'}
		        selectable={false}
		        showRowHover={true}
		        columns={TABLE_STATUS_COLS}
		        data={this.state.searchResults}
		        showCheckboxes={false}
		        showHeaderToolbar
		        onCellClick={this.onCellClick.bind(this)}
		        onCellDoubleClick={this.handleCellDoubleClick}
		        onFilterValueChange={this.handleFilterValueChange.bind(this)}
		        onSortOrderChange={this.handleSortOrderChange}
		        page={1}
		        count={100}
		      />
		      </MuiThemeProvider>
		      <Dialog
  open={this.state.simpleDialogIsOpen}
  onClose={evt => this.setState({simpleDialogIsOpen: false})}
>
  <DialogRoot>
    <DialogSurface>
        <DialogHeader>
          <DialogHeaderTitle>Status of {this.state.clickedName}</DialogHeaderTitle>
        </DialogHeader>
        <DialogBody><Status auditeeId={this.state.clickedId} duration={this.state.clickedDuration}/></DialogBody>
        <DialogFooter>
            <DialogFooterButton cancel>Cancel</DialogFooterButton>
        </DialogFooter>
    </DialogSurface>
    <DialogBackdrop />
  </DialogRoot>
</Dialog>

      </div>
    );
  }
}