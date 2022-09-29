import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "./calender.css"

export default function CalenderCustom(props) {
    const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"]
    return (
        <Calendar
            value={props.value ? props.value : new Date()}
            onChange={props.setValue}
            calendar={persian}
            locale={persian_fa}
            readOnly={props.readOnly}
            disabled={props.disabled}
            range={props.range}
            hideWeekDays={props.hideWeekDays}
            hideMonth={props.hideMonth}
            hideYear={props.hideYear}
            fullYear={props.fullYear}
            weekDays={weekDays}
            maxDate={props.maxDate}
            minDate={props.minDate}
            mapDays={({ date }) => {
                let props = {}
                let isWeekend = [6].includes(date.weekDay.index)

                if (isWeekend) props.className = "highlight highlight-red"

                return props
            }}
        />
    )
}