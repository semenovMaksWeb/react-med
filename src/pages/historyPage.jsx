import { useState } from "react";
import { apiHistory } from "../api/history";
import { HistoryList } from "../components/historyList";

export function HistoryPage() {
    const [polis, polisSave] = useState("");
    const [historyState, historySave] = useState("");
    const polisChange = (e) => {
        polisSave(e.target.value);
    }

    const click = () => {
        const history = apiHistory().history();
        historySave(history);
    }

    return (
        <div className="historyPage">
            <h1>История болезни</h1>
            <div>
                <label htmlFor="">Полис</label><br />
                <input min="0" type="number" value={polis} onChange={polisChange} />
                <br />
                <br />
                <button onClick={click}>Вывести историю</button>
                <HistoryList history={historyState} />
            </div>
        </div>
    );
}