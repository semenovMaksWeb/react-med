import { useState } from "react"
import { apiDoctors } from "../api/doctors";
import { apiHistory } from "../api/history";

export function AddHistoryPage() {

    const [polisUser, polisUserSave] = useState(null);
    const [polisUserActive, polisUserActiveSave] = useState(null);
    const [polisDoctor, polisDoctorSave] = useState("");
    const [text, textSave] = useState("");

    const onChangePolisDoctor = (e) => {
        polisDoctorSave(e.target.value);
    }

    const onChangepolisUserActive = (e) => {
        polisUserActiveSave(e.target.value);
    }

    const checkPolisDoctor = async () => {
        if (polisDoctor) {
            const data = await apiDoctors().doctorUserCheck(polisDoctor);
            if (data) {
                polisUserSave(data)
            }
        }
    }

    const onChangeText = (e) => {
        textSave(e.target.value);
    }

    const click = async () => {
        if (polisDoctor && text && polisUserActive) {
            await apiHistory().save(polisDoctor, polisUserActive, text);
        }
    }

    let htmlPolisUser = [];
    if (polisUser) {
        for (const polisUserElem of polisUser) {
            htmlPolisUser.push(<option key={polisUserElem.id} value={polisUserElem.id}>{polisUserElem.fio} {polisUserElem.tlf}</option>);
        }
    }


    return (
        <div className="addHistoryPage">
            <h1>Добавить запись</h1>
            <div className="formAddHistory">
                <div className="formAddHistoryElement">
                    <label htmlFor="">Полис врача</label>
                    <input value={polisDoctor} onChange={onChangePolisDoctor} />
                    <button onClick={checkPolisDoctor}>Проверить полис врача</button>
                </div>
                <div className="formAddHistoryElement">
                    <label htmlFor="">Полис пациента</label>
                    <select value={polisUserActive} onChange={onChangepolisUserActive}>
                        {htmlPolisUser}
                    </select>
                </div>
            </div>

            <div className="formAddHistoryElement">
                <label htmlFor="">Запись пациента</label>
                <textarea value={text} onChange={onChangeText} />
            </div>
            <button onClick={click} className="MainButton">Сохранить</button>
        </div>
    )
}