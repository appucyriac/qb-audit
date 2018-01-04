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
import { Snackbar } from 'rmwc/Snackbar';
import {Card,CardMedia,CardTitle,CardSubtitle,CardPrimary} from 'rmwc/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Select from 'rmwc/Select';
import StatusBox from './StatusBox'
import ToBeAuditedBox from './ToBeAuditedBox'



class Organizer extends React.Component {


 render() {
    return (
      <div>
      <ToBeAuditedBox/>
      <StatusBox/>
      
     </div>
    );
  }
}
export default Organizer