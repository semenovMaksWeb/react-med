import { Link } from "react-router-dom";
import { apiDoctors } from "../api/doctors";

export function DoctorsPage() {
    const doctorsList = [];
    const doctors = apiDoctors().doctorsAll();
    for (const doctor of doctors) {
        console.log(doctor);
        doctorsList.push(
            <div key={doctor.id} className="doctorElement">
                <Link to={'/doctor/' + doctor.id} className="doctorName">{doctor.name}</Link>
                <img className="doctorAvatar" src={doctor.pathImg} />
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