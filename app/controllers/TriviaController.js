import { AppState } from "../AppState.js"
import { trivasService } from "../services/TriviaService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";


function _drawQuestion() {
    const question = AppState.activeQuestion
    if (!question) {
        return setHTML('triviaGame', 'game over')
    }
    let htmlString = question.TriviaHTMLTemplate
    setHTML('triviaGame', htmlString)
}


export class TriviaController {
    constructor() {
        this.getTrivias()
        AppState.on('activeQuestion', _drawQuestion)
    }
    async getTrivias() {
        try {
            await trivasService.getTrivias()
            Pop.success('Got all the Trivias')
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    submitAnswer(answer) {
        console.log(answer, AppState.trivias);

        trivasService.submitAnswer(answer)


    }

}


