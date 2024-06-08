export function HistoryList(props) {
    const historyHtml = [];
    for (const historyElem of props.history) {
        historyHtml.push(
            <div className="historyElem">
                <div>Время: {historyElem.date.toString()}</div>
                <div>Запись: {historyElem.text}</div>
            </div>
        );
    }
    return (
        <div className="historyList">
            {historyHtml}
        </div>
    );
}