import axios from "axios";
import { baseApi } from "./base"

export function apiDoctors() {
    const { MainApi } = baseApi();
    const doctorsAll = async () => {
        const { data } = await axios.get(`${MainApi}/doctor`);
        return data;
    }

    const doctorsGetId = async (id) => {
        const { data } = await axios.get(`${MainApi}/doctor/${id}`);
        return data;
    }


    const doctorUserCheck = async (polis) => {
        const { data } = await axios.get(`${MainApi}/user/doctor/${polis}`);
        return data;
    }

    const doctorsGetTime = async (doctor, date) => {
        const { data } = await axios.get(`${MainApi}/reception`,
            {
                params: {
                    date: date,
                    doctorId: doctor
                }
            }
        );
        return data;
    }

    const receptionSave = async (body) => {
        const { data } = await axios.post(`${MainApi}/reception`,
            body
        );
        return data;
    }

    return {
        doctorsAll,
        doctorsGetId,
        doctorsGetTime,
        doctorUserCheck,
        receptionSave
    }
}
