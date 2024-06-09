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

        history(polis) {
            return [
                { id: 1, date: new Date(), text: "Пациент пришел на мед осмотр, обнаружена сонливость и слабость и выдан больничный до 15.06.2024", doctor: apiDoctors().doctorsGetId(1) },
                { id: 2, date: new Date(), text: "Пациент пришел на мед осмотр, обнаружена сонливость и слабость и выдан больничный до 15.06.2024", doctor: apiDoctors().doctorsGetId(1) }
            ]
        }
    }
}