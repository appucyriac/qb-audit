import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DataTables from 'material-ui-datatables';
import { Typography } from 'rmwc/Typography';
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
const TABLE_STATUS_COLS = [
  {
    key: 'name',
    label: 'Name',
    type:'select',
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
    label: 'Rating',
    
  },
      {
    key: 'final_status',
    label: 'Final Status',
    
  }
]
 
const TABLE_STATUS_DATA = [
  {
    name: 'Deadpool',
    auditor:'Bruce',
    progress:'In Progress',
    rating:'3',
    final_status:'Not Completed'
    

  }, {
    name: 'Tony Stark',
    auditor:'Peter',
    progress:'In Progress',
    rating:'4',
    final_status:'Not Completed'
   
  }
]
export default class StatusBox extends Component {
  
constructor(props) {
    super(props);
    this.state = {
        simpleDialogIsOpen:false,
        clickedName:null,
        filterValue:null
                  };
  }
onCellClick(tableRow, tableColumn, dataItem, dataItemField){
	this.setState({simpleDialogIsOpen:true,clickedName:dataItem.name});

	
}
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
          <DialogHeaderTitle>Status of {this.state.clickedName}</DialogHeaderTitle>
        </DialogHeader>
        <DialogBody><Status/></DialogBody>
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