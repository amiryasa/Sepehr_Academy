import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment";
import "./datePicker.css"

export default function DatePickerCustome(props) {

    return (
        <LocalizationProvider dateAdapter={AdapterJalali}>
            <DatePicker
                className={props.className}
                disableFuture
                label={props.label}
                mask="____/__/__"
                value={props.value ? props.value : new Date()}
                onChange={(newValue) => {
                    props.onChange(newValue)
                    console.log(newValue.toLocaleDateString('fa-IR'));
                    console.log(moment(newValue).format(("YYYY-MM-DD")));
                }}
                renderInput={(params) =>
                    <TextField {...params}
                        helperText={props.helperText}
                        error={props.error} />
                }
                minDate={props.minDate}
                maxDate={props.maxDate}
                views={props.view}
            />
        </LocalizationProvider>
    )
};
