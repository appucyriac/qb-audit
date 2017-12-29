import React from 'react'
import '../assets/css/qbaudit-styles.css'
import '../../node_modules/material-components-web/dist/material-components-web.css'
import { Button } from 'rmwc/Button';
import { FormField } from 'rmwc/FormField';
import { TextField } from 'rmwc/TextField';
import { Checkbox } from 'rmwc/Checkbox';
import { Elevation } from 'rmwc/Elevation';
import { Typography } from 'rmwc/Typography';
import { Grid,GridCell } from 'rmwc/Grid';
import { Snackbar } from 'rmwc/Snackbar';
import {Card,CardMedia,CardTitle,CardSubtitle,CardPrimary} from 'rmwc/Card';
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
 render() {
    return (
      <div className="auditeeBox">
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
		<Grid>
			<GridCell span="4"><Typography use="subheading2">Rating</Typography>
				<GridCell span="4">3</GridCell>
		    </GridCell>
			<GridCell span="4"><Typography use="subheading2">Duration</Typography>
			    <GridCell span="4">April 2017 - October 2017</GridCell>
			</GridCell>
			<GridCell span="4"><Typography use="subheading2">Comments</Typography>
			    <GridCell span="4">Half yearly</GridCell>
			</GridCell>
			<Snackbar
		show={this.state.snackbarIsOpen}
	onClose={evt => this.setState({snackbarIsOpen: false})}
	message="Welcome"
	actionText="Dismiss"
	
/>
		</Grid>
      </div>
    );
  }
}
export default Auditee