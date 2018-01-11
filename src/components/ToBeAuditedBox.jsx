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
import StatusBox from './StatusBox';
import auditee from '../assets/auditee.json';
import auditor from '../assets/auditor.json';
import users from '../assets/users.json';
let options =[],
    auditorName="",
    selectedAuditorId=0,
    clickedId=0,
    clickedDuration="";

 
let TABLE_DATA = [
];
let TABLE_COLUMNS =[
];

export default class ToBeAuditedBox extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        snackbarIsOpen:false,
        selectedAuditor:"",
        selectedAuditorId:0,
        clickedId:0,
        clickedDuration:""
                  };
  TABLE_COLUMNS = [
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'duration',
    label: 'Duration'
  },
  {
    key: 'auditor',
    label: 'Auditor',
    render: (auditor, all) => <Select
        name="form-field-name"
        value='value'
        options={options}
        onChange={this.handleChange.bind(this)}
         />
        }];
    auditor.auditorList.map(function(value){
      let newItem={value:value.name, label:value.name}
      options.push(newItem);
    })
    TABLE_DATA=[];
    let auditees =JSON.parse(localStorage.getItem('auditee'));
    auditees.auditeeList.map(function(value){
       value.history.map(function(data){
         if(data.auditorId == 0)
         {
          let newItem ={
            name:value.name,
            duration:data.duration,
            id:value.id
          }
          TABLE_DATA.push(newItem);
         }
       })
    })
  }


 handleChange(event){
  
  users.userlist.map(function(value){
  if(value.name==event.target.value)
    {selectedAuditorId=value.id;
    auditorName=value.name;}
  })
  this.setState({selectedAuditorId:selectedAuditorId});
  this.setState({selectedAuditor:auditorName});

 }
  handleAssign(value){
    debugger
        let id=this.state.clickedId,
              duration=this.state.clickedDuration,
              auditorId=this.state.selectedAuditorId;
              auditorName=this.state.selectedAuditor;
         auditee.auditeeList.map(function(value){

             if(value.id== id)
                 {
                  value.history.map(function(data){
                   if(data.duration== duration)
                      {
                        data.auditorId=auditorId;
                        data.auditorName=auditorName;}
                  })
                 }
              })
         this.setState({snackbarIsOpen:true});
         localStorage.setItem('auditee',JSON.stringify(auditee));

  }
  onCellClick(tableRow, tableColumn, dataItem, dataItemField){
         users.userlist.map(function(value){
           if(value.name == dataItem.name)
            {   
                 clickedId=value.id,
                 clickedDuration=dataItem.duration;
            }
         })
         this.setState({clickedId:clickedId});
         this.setState({clickedDuration:clickedDuration});

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
                selectable={false}
                showRowHover={true}
                columns={TABLE_COLUMNS}
                data={TABLE_DATA}
                showCheckboxes={false}
                onCellClick={this.onCellClick.bind(this)}
                page={1}
                count={100}
              />
              <Button raised theme={['secondary-bg', 'text-primary-on-secondary']} className="assignButton" onClick={this.handleAssign.bind(this)}>Assign</Button>
          </MuiThemeProvider>
          <Snackbar
          show={this.state.snackbarIsOpen}
          onClose={evt => this.setState({snackbarIsOpen: false})}
          message="Auditor assigned"
          actionText="Dismiss"
          timeout="500"
            />
      </div>
    );
  }
}