import { apiDoctors } from "./doctors"

export function apiHistory() {
    return {
        history(polis) {
            return [
                { id: 1, date: new Date(), text: "Пациент пришел на мед осмотр, обнаружена сонливость и слабость и выдан больничный до 15.06.2024", doctor: apiDoctors().doctorsGetId(1) },
                { id: 2, date: new Date(), text: "Пациент пришел на мед осмотр, обнаружена сонливость и слабость и выдан больничный до 15.06.2024", doctor: apiDoctors().doctorsGetId(1) }
            ]
        }
    }
}