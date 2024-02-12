import { AppState } from "../AppState.js"



class TriviasService {
    async getTrivias() {
        const response = await triviaApi.get('api.php?amount=30&category=27&difficulty=medium')
        const newTrivias = response.data.results.map(triviaPojo => new Trivia(triviaPojo))
        AppState.trivias = newTrivias
    }
}

export const trivasService = new TriviasService()