import axios from "axios";
import { baseApi } from "./base";

export function apiUser() {
    const { MainApi } = baseApi();

    const checkPolisUser = async (polis) => {
        const { data } = await axios.get(`${MainApi}/user/check/polis/${polis}`);
        return data;
    }

    const saveUser = async (body) => {
        const { data } = await axios.post(`${MainApi}/user`, body);
        return data;
    }

    return {
        checkPolisUser,
        saveUser
    }
}