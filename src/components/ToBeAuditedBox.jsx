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

import { Snackbar } from 'rmwc/Snackbar';
import {Card,CardMedia,CardTitle,CardSubtitle,CardPrimary} from 'rmwc/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Select from 'rmwc/Select';
import StatusBox from './StatusBox'
const TABLE_COLUMNS = [
  {
    key: 'name',
    label: 'Name',
    type:'select',
  },
  {
    key: 'auditor',
    label: 'Auditor',
    render: (auditor, all) => <Select
        name="form-field-name"
        value='value'
        options={[
          { value: 'Bruce', label: 'Bruce' },
          { value: 'Peter', label: 'Peter' },
        ]}/>
  }
]
 
const TABLE_DATA = [
  {
    name: 'Deadpool',
    auditor:'Auditor_List.name'
    

  }, {
    name: 'Tony Stark',
    auditor:'Auditor_List.name'
    
   
  }

]
export default class ToBeAuditedBox extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        snackbarIsOpen:false,
        cellClick:false
                  };
    this.handleCellClick=this.handleCellClick.bind(this);
  }
  
  componentDidMount() {

    this.setState({snackbarIsOpen: !this.state.snackbarIsOpen})
  }
  handleCellClick(value){
    
    this.state.cellClick=true;
      
    
  }

  render() {
    return (
      <div className="auditeeBox">
      <Typography use="headline" className="title">Organizer Dashboard</Typography>
        <Card className="userImage">
        <CardMedia style={{
          backgroundImage: 'url(https://assets1.sharetribe.com/assets/profile_image/medium/missing-c54f2181aa6b87c9c74bbe1ed8876086c314ffcf318441f2f7d70daf736fc3f2.png)',
          height: '12.313rem',
          width: '12.5rem'

          
        }}>
        </CardMedia>
        <CardPrimary>
          <CardTitle large>Organizer</CardTitle>
          <CardSubtitle>Emp No: 123456</CardSubtitle>
        </CardPrimary>
       </Card>
          <Typography use="title">To be audited</Typography>
          <MuiThemeProvider> 
          <DataTables
            height={'auto'}
            selectable={true}
            showRowHover={true}
            columns={TABLE_COLUMNS}
            data={TABLE_DATA}
            showCheckboxes={true}
            onCellClick={this.handleCellClick}
            onCellDoubleClick={this.handleCellDoubleClick}
            onFilterValueChange={this.handleFilterValueChange}
            onSortOrderChange={this.handleSortOrderChange}
            filterHintText={'Search'}
            filterValue={"Dead"}
            page={1}
            count={100}
          /><Button raised theme={['secondary-bg', 'text-primary-on-secondary']} className="assignButton">Assign</Button>

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