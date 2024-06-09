import { apiDoctors } from "./doctors"
import { baseApi } from "./base"
import axios from "axios";

export function apiHistory() {
    const { MainApi } = baseApi();
    return {

        async save(polis, userId, text) {
            const { data } = await axios.post(`${MainApi}/history`, { polis, userId, text });
            return data;
        },

        async history(polis) {
            const { data } = await axios.get(`${MainApi}/history/${polis}`);
            return data;
        }
    }
}