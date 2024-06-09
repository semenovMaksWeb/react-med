import { useEffect, useState } from "react"
import { apiDoctors } from "../api/doctors"
import { useSearchParams } from "react-router-dom";
import { TimeListRecord } from "../components/timeListRecord";

export function RecordPage() {
    const options = [];
    const [searchParams] = useSearchParams();
    const [activeDoctor, activeDoctorSave] = useState("");
    const [activeDate, activeDateSave] = useState("");
    const [polis, polisSave] = useState("");
    const [checkPolis, checkPolisSave] = useState(false);
    const [doctors, doctorsSave] = useState([]);

    const selectDoctorChange = (e) => {
        activeDoctorSave(e.target.value);
    }

    const polisSaveChange = (e) => {
        checkPolisSave(false);
        polisSave(e.target.value);
    }

    const activeDateSaveChange = (e) => {
        activeDateSave(e.target.value);
    }

    const checkPolisRun = () => {
        if (polis) {
            checkPolisSave(true);
        }
    }


    useEffect(() => {
        (async () => {
            doctorsSave(await apiDoctors().doctorsAll());
            const searchDoctor = searchParams.get("doctor");
            if (+searchDoctor) {
                activeDoctorSave(searchDoctor);
            } else if (doctors.length) {
                activeDoctorSave(doctors[0].id);
            }
        })()
    }, [])

    if (doctors.length) {
        for (const doctor of doctors) {
            options.push(<option value={doctor.id} key={doctor.id}>{doctor.name}</option>)
        }
    }


    const timeListRecord = () => {
        if (activeDate && activeDoctor && polis && checkPolis) {
            return <TimeListRecord date={activeDate} doctor={activeDoctor} />
        }
        return <></>
    }

    return (
        <div className="recordPage">
            <h1>Запись к врачу</h1>
            <div className="formFilter">

                <div>
                    <label htmlFor=""> Полис </label>
                    <input value={polis} onChange={polisSaveChange} />
                    <button onClick={checkPolisRun}>Проверить полис</button>
                </div>
                <br />

                <div>
                    <label htmlFor="">Врач </label>
                    <select value={activeDoctor} onChange={selectDoctorChange}>
                        {options}
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="">Дата записи </label>
                    <input value={activeDate} onChange={activeDateSaveChange} type="date" />
                    {timeListRecord()}
                </div>

            </div>
        </div>
    )
}