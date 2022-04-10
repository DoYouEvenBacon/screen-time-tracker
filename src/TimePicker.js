import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function BasicTimePicker(props) {
  //const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label={props.label}
        //value={value}
        value={props.time}
        /*onChange={(newValue) => {
          setValue(newValue);
        }}*/
        disabled={true}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}