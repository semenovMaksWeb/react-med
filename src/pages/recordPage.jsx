import { useEffect, useState } from "react"
import { apiDoctors } from "../api/doctors"
import { useSearchParams } from "react-router-dom";
import { TimeListRecord } from "../components/timeListRecord";

export function RecordPage() {
    const options = [];
    const [searchParams] = useSearchParams();
    const [activeDoctor, activeDoctorSave] = useState("");
    const [activeDate, activeDateSave] = useState("");

    const selectDoctorChange = (e) => {
        activeDoctorSave(e.target.value);
    }
    const activeDateSaveChange = (e) => {
        activeDateSave(e.target.value);
    }

    const doctors = apiDoctors().doctorsAll();
    for (const doctor of doctors) {
        options.push(<option value={doctor.id} key={doctor.id}>{doctor.name}</option>)
    }

    const timeListRecord = () => {
        if (activeDate && activeDoctor) {
            return <TimeListRecord date={activeDate} doctor={activeDoctor} />
        }
        return <></>
    }

    useEffect(() => {
        const searchDoctor = searchParams.get("doctor");
        if (+searchDoctor) {
            activeDoctorSave(searchDoctor);
        } else {
            activeDoctorSave(doctors[0].id);
        }
    }, [])

    return (
        <div className="recordPage">
            <div className="formFilter">
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