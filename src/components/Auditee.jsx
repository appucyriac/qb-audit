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
import {Card,CardMedia,CardTitle,CardSubtitle,CardPrimary} from 'rmwc/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' 
const TABLE_COLUMNS = [
  {
    key: 'rating',
    label: 'Rating',
  }, {
    key: 'duration',
    label: 'Duration',
  },
  {
    key: 'comment',
    label: 'Comment',
  }
]
 
const TABLE_DATA = [
  {
    rating: '3',
    duration: 'April 2017 - November 2017',
    comment: 'Half Yearly'
  }, {
    rating: '4',
    duration: 'December 2016 - April 2017',
    comment: 'Half Yearly'
   
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
  handleCellClick(key,value){

  }
 render() {
    return (
      
      

      <div className="auditeeBox">
      <Typography use="headline" className="title">Auditee Dashboard</Typography>
	      <Card className="userImage">
				<CardMedia style={{
					backgroundImage: 'url(https://assets1.sharetribe.com/assets/profile_image/medium/missing-c54f2181aa6b87c9c74bbe1ed8876086c314ffcf318441f2f7d70daf736fc3f2.png)',
					height: '12.313rem',
					width: '12.5rem'

					
				}}>
				</CardMedia>
				<CardPrimary>
					<CardTitle large>Auditee</CardTitle>
					<CardSubtitle>Emp No: 123456</CardSubtitle>
	 			</CardPrimary>
	     </Card>
	        <Typography use="title">List of ratings</Typography>
	        <MuiThemeProvider> 
		      <DataTables
		        height={'auto'}
		        selectable={true}
		        showRowHover={true}
		        columns={TABLE_COLUMNS}
		        data={TABLE_DATA}
		        showCheckboxes={false}
		        onCellClick={this.handleCellClick}
		        onCellDoubleClick={this.handleCellDoubleClick}
		        onFilterValueChange={this.handleFilterValueChange}
		        onSortOrderChange={this.handleSortOrderChange}
		        page={1}
		        count={100}
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