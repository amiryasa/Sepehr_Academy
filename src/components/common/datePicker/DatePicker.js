import DatePicker from "react-multi-date-picker"
import persian_fa from "react-date-object/locales/persian_fa"
import persian from "react-date-object/calendars/persian"
import InputIcon from "react-multi-date-picker/components/input_icon"
import "./datePicker.css"


export default function DatePickerCustome(props) {
    const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"]
    const mouths = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]

    return (
        <div className="datePicker_form">
            <label className={`${props.value ? "label_datePicker_top" : "label_datePicker"}`}>
                {props.label}
            </label>
            <DatePicker
                className={props.className}
                value={props.value}
                onChange={props.setValue}
                multiple={props.multiple}
                range={props.range}
                format="YYYY/MM/DD"
                calendar={persian}
                // locale={persian_fa}
                readOnly={props.readOnly}
                disabled={props.disabled}
                hideWeekDays={props.hideWeekDays}
                hideMonth={props.hideMonth}
                hideYear={props.hideYear}
                fullYear={props.fullYear}
                weekDays={weekDays}
                months={mouths}
                minDate={props.minDate}
                maxDate={props.maxDate}
                render={<InputIcon />}
                mapDays={({ date }) => {
                    let props = {}
                    let isWeekend = [6].includes(date.weekDay.index)

                    if (isWeekend) props.className = "highlight highlight-red"

                    return props
                }}
            />
        </div>
    )
}