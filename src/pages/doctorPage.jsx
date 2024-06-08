import { useParams } from 'react-router';
import { apiDoctors } from '../api/doctors';
import { Link } from 'react-router-dom';

export function DoctorPage() {
    const { id } = useParams();
    const doctor = apiDoctors().doctorsGetId(id);

    return (
        <div className="doctorPage">
            <div key={doctor.id} className="doctorElement">
                <h1 className="doctorName">{doctor.name}</h1>
                <img className="doctorAvatar" src={doctor.pathImg} />
                <p>{doctor.description}</p>
                <Link to={'/record?doctor=' + doctor.id} className="doctorButtonRecord">Записаться</Link>
            </div>
        </div>

    )
}