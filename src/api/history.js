export function apiHistory() {
    return {
        history(polis) {
            return [
                { date: new Date(), text: "Пациент пришел на мед осмотр, обнаружена сонливость и слабость и выдан больничный до 15.06.2024" }
            ]
        }
    }
}