import { useEffect, useState } from "react";
import { apiDoctors } from "../api/doctors";

export function TimeListRecord(props) {
    const timeHtml = [];
    const [timeList, timeListSave] = useState([]);

    useEffect(() => {
        (async () => {
            timeListSave(await apiDoctors().doctorsGetTime(props.doctor, props.date));
        })()
    }, [props.date, props.doctor])

    if (timeList?.length) {
        for (const [index, timeElem] of timeList.entries()) {
            const classNameActive = timeElem.status == 1 ? "timeElement closeTime" : "timeElement";
            const textTime = timeElem.status == 1 ? "Занято" : "Свободно";
            const click = async () => {
                if (timeElem.status != 1) {
                    console.log(props);
                    try {
                        await apiDoctors().receptionSave({ idDoctor: props.doctor, time: timeElem.time, date: props.date, polis: props.polis });
                        let copy = Object.assign([], timeList);
                        copy[index].status = 1;
                        timeListSave(copy);
                    } catch (e) {
                        console.error(e);
                    }

                }
            }
            timeHtml.push(<div onClick={click} key={timeElem.time} className={classNameActive}>{timeElem.time} ({textTime}) </div>);
        }
    }


    return (
        <div className="timeElementList">
            <h2>Время записи</h2>
            {timeHtml}
        </div>
    )
}