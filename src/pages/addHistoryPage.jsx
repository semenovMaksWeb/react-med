import { useState } from "react"

export function AddHistoryPage() {

    const [polisUser, polisUserSave] = useState();
    const [polisDoctor, polisDoctorSave] = useState("");
    const [text, textSave] = useState("");

    const onChangePolisDoctor = (e) => {
        polisDoctorSave(e.target.value);
    }

    const checkPolisDoctor = () => {
        console.log('запрос на бэк который принимает полис врача и если это правда врач возвращает список полисов для дальшейней работы иначе выдает ошибку!');
    }

    const onChangeText = (e) => {
        textSave(e.target.value);
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
                    <select></select>
                </div>
            </div>

            <div className="formAddHistoryElement">
                <label htmlFor="">Запись пациента</label>
                <textarea value={text} onChange={onChangeText} />
            </div>
        </div>
    )
}