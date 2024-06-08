import { useEffect, useState } from "react";
import { apiDoctors } from "../api/doctors";

export function TimeListRecord(props) {
    const timeHtml = [];
    const [timeList, timeListSave] = useState([]);

    useEffect(() => {
        timeListSave(apiDoctors().doctorsGetTime(props.doctor, props.date));
    }, [props.date, props.doctor])

    for (const [index, timeElem] of timeList.entries()) {
        const classNameActive = timeElem.status == 1 ? "timeElement closeTime" : "timeElement";
        const textTime = timeElem.status == 1 ? "Занято" : "Свободно";
        const click = () => {
            if (timeElem.status != 1) {
                let copy = Object.assign([], timeList);
                copy[index].status = 1;
                timeListSave(copy);
            }
        }
        timeHtml.push(<div onClick={click} key={timeElem.time} className={classNameActive}>{timeElem.time} ({textTime}) </div>);
    }

    return (
        <div className="timeElementList">
            <h2>Время врача</h2>
            {timeHtml}
        </div>
    )
}