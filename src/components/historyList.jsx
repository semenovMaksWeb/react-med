export function HistoryList(props) {
    const historyHtml = [];
    for (const historyElem of props.history) {
        historyHtml.push(
            <div key={historyElem.id} className="historyElem">
                <div><b>Время:</b> {historyElem.date.toString()}</div>
                <div><b>Запись:</b> {historyElem.text}</div>
                <div><b>Врач:</b> {historyElem.doctor.name}</div>
            </div>
        );
    }
    return (
        <div className="historyList">
            {historyHtml}
        </div>
    );
}