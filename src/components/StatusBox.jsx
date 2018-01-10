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
 
let TABLE_STATUS_DATA = [
];
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
    TABLE_STATUS_DATA=[];
    auditee.auditeeList.map(function(value){
       value.history.map(function(data){
          let newItem={
          	name:value.name,
          	auditor:data.auditorName,
          	rating:data.aggregate,
          	progress:"",
          	duration:data.duration,
          	final_status:data.status
          }
          TABLE_STATUS_DATA.push(newItem);
       })
    })
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
		        data={TABLE_STATUS_DATA}
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
          <DialogHeaderTitle>Status of {this.state.clickedName} for {this.state.clickedDuration}</DialogHeaderTitle>
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