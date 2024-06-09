import { Link } from "react-router-dom";
import { apiDoctors } from "../api/doctors";
import { useEffect, useState } from "react";

export function DoctorsPage() {
    const doctorsList = [];
    const [doctors, doctorsSave] = useState([]);

    useEffect(() => {
        (async () => {
            doctorsSave(await apiDoctors().doctorsAll());
        })()
    }, [])

    for (const doctor of doctors) {
        console.log(doctor);
        doctorsList.push(
            <div key={doctor.id} className="doctorElement">
                <Link to={'/doctor/' + doctor.id} className="doctorName">{doctor.name}</Link>
                <img className="doctorAvatar" src={doctor.image} />
            </div>
        )
    }


    return (
        <div>
            <h1>Список врачей</h1>
            <div className="doctorsList">
                {doctorsList}
            </div>
        </div>
    )
}