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

    const doctorsGetTime = (doctor, date) => {
        return [
            {
                "time": "8:00",
                "status": 0,
            },
            {
                "time": "8:30",
                "status": 0,
            },
            {
                "time": "9:00",
                "status": 0,
            },
            {
                "time": "9:30",
                "status": 0,
            },
            {
                "time": "10:00",
                "status": 0,
            },
            {
                "time": "10:30",
                "status": 0,
            },
            {
                "time": "11:00",
                "status": 0,
            },
            {
                "time": "11:30",
                "status": 0,
            },
            {
                "time": "12:00",
                "status": 0,
            },
            {
                "time": "12:30",
                "status": 0,
            },
            {
                "time": "13:00",
                "status": 0,
            },
            {
                "time": "13:30",
                "status": 1,
            },
            {
                "time": "14:00",
                "status": 0,
            },
            {
                "time": "14:30",
                "status": 0,
            },
            {
                "time": "15:00",
                "status": 1,
            },
            {
                "time": "15:30",
                "status": 0,
            },
            {
                "time": "16:00",
                "status": 1,
            },
            {
                "time": "16:30",
                "status": 0,
            },
            {
                "time": "17:00",
                "status": 0,
            }
        ]
    }

    return {
        doctorsAll,
        doctorsGetId,
        doctorsGetTime
    }
}
