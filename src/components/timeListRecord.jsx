import { useEffect, useState } from "react";
import { apiDoctors } from "../api/doctors";

export function TimeListRecord(props) {
    const timeHtml = [];
    const [timeList, timeListSave] = useState([]);
    useEffect(() => {
        timeListSave(apiDoctors().doctorsGetTime(props.doctor, props.date));
    }, [props.date, props.doctor])

    for (const timeElem of timeList) {
        timeHtml.push(<div key={timeElem.time} className="timeElement">{timeElem.time}</div>);
    }

    return (
        <div className="timeElementList">
            {timeHtml}
        </div>
    )
}