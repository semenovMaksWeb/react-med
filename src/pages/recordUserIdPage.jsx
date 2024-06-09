import { useState } from "react";
import { apiUser } from "../api/user";


export function RecordUserIdPage() {
    const [polis, polisSave] = useState("");
    const [historyState, historySave] = useState("");

    const polisChange = (e) => {
        polisSave(e.target.value);
    }

    let htmlTable = [];
    const click = async () => {
        if (polis) {
            const history = await apiUser().recordUser(polis);
            historySave(history);
        }
    }

    if (history) {
        for (const historyElement of historyState) {
            htmlTable.push(
                <div className="recordUserElement">
                    <div className="recordUserElementDoctor"><b>Доктор:</b> {historyElement.doctor.name}</div>
                    <div className="recordUserElementDate"><b>Дата:</b> {historyElement.date}</div>
                    <div className="recordUserElementTime"><b>Время:</b> {historyElement.time}</div>
                </div>
            )
        }
    }


    return (
        <div className="historyPage">
            <h1>Ваши приемы</h1>
            <div>
                <label htmlFor="">Полис</label><br />
                <input min="0" value={polis} onChange={polisChange} />
                <button className="buttonMain" onClick={click}>Вывести историю</button>
                {htmlTable}
            </div>
        </div>
    );
}