import { AppState } from "../AppState.js"
import { Trivia } from "../models/Trivia.js"
import { triviaApi } from "./AxiosService.js"



class TriviasService {
    async getTrivias() {
        const response = await triviaApi.get('api.php?amount=30&category=27&difficulty=medium')
        const newTrivias = response.data.results.map(triviaPojo => new Trivia(triviaPojo))
        AppState.trivias = newTrivias
        AppState.activeQuestion = AppState.trivias.shift()
    }


    submitAnswer(a) {
        if (AppState.activeQuestion.correctAnswer == a) {
            // TODO award points
        } else {
            // TODO lose points
        }

        AppState.activeQuestion = AppState.trivias.shift()


    }
}

export const trivasService = new TriviasService()