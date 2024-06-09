export function AddHistoryPage() {
    return (
        <div className="addHistoryPage">
            <h1>Добавить запись</h1>
            <div className="formAddHistory">
                <div className="formAddHistoryElement">
                    <label htmlFor="">Полис врача</label>
                    <input />
                </div>
                <div className="formAddHistoryElement">
                    <label htmlFor="">Полис пациента</label>
                    <select></select>
                </div>
            </div>

            <div className="formAddHistoryElement">
                <label htmlFor="">Запись пациента</label>
                <textarea />
            </div>
        </div>
    )
}