import { useEffect, useState } from "react"
import { apiDoctors } from "../api/doctors"
import { useSearchParams } from "react-router-dom";
import { TimeListRecord } from "../components/timeListRecord";
import { apiUser } from "../api/user";

export function RecordPage() {
    const { checkPolisUser, saveUser } = apiUser()
    const options = [];
    const [searchParams] = useSearchParams();
    const [activeDoctor, activeDoctorSave] = useState("");
    const [activeDate, activeDateSave] = useState("");
    const [polis, polisSave] = useState("");
    const [polisCheckApi, polisCheckApiSave] = useState(undefined);
    const [checkPolis, checkPolisSave] = useState(false);
    const [doctors, doctorsSave] = useState([]);

    const [userFIO, userFIOSave] = useState("");
    const [userTLF, userTLFSave] = useState("");

    // состояние активного доктора
    const selectDoctorChange = (e) => {
        activeDoctorSave(e.target.value);
    }

    // состояние фио пользователя
    const selectUserFIOChange = (e) => {
        userFIOSave(e.target.value);
    }

    // состояние телефона пользователя
    const selectUserTLFChange = (e) => {
        userTLFSave(e.target.value);
    }

    // состояние полиса пользователя
    const polisSaveChange = (e) => {
        checkPolisSave(false);
        polisCheckApiSave(undefined);
        polisSave(e.target.value);
    }

    // состояние активной даты
    const activeDateSaveChange = (e) => {
        activeDateSave(e.target.value);
    }

    //  создать пользователя
    const saveUserButton = async () => {
        if (userFIO && userTLF && polis) {
            await saveUser({ polis: polis, fio: userFIO, tlf: userTLF })
            polisCheckApiSave(true);
            checkPolisSave(true)
        }
    }

    // проверить полис
    const checkPolisRun = async () => {
        if (polis) {
            const status = await checkPolisUser(polis);
            polisCheckApiSave(status);
            checkPolisSave(status);
        }
    }

    const htmlUser = () => {
        if (polisCheckApi == false) {
            return <div className="formUser">
                <p className="errors">данный полис не найден</p>
                <label htmlFor="">Введите ФИО </label>
                <input value={userFIO} onChange={selectUserFIOChange}></input>
                <br />
                <label htmlFor="">Введите номер телефона </label>
                <input value={userTLF} onChange={selectUserTLFChange}></input>
                <br />
                <button onClick={saveUserButton} className="buttonMain">Сохранить ваши данные</button>
                <br />
            </div>
        }
        return <></>
    }

    useEffect(() => {
        (async () => {
            doctorsSave(await apiDoctors().doctorsAll());
            const searchDoctor = searchParams.get("doctor");
            if (+searchDoctor) {
                activeDoctorSave(+searchDoctor);
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

    if (doctors.length && !activeDoctor) {
        activeDoctorSave(doctors[0].id);
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
                    <button className="buttonMain" onClick={checkPolisRun}>Проверить полис</button>
                </div>
                {htmlUser()}
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