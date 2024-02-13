import { AppState } from "../AppState.js"
import { trivasService } from "../services/TriviaService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";


function _drawTrivia() {
    const trivias = AppState.trivias
    let htmlString = ''
    trivias.forEach(trivia => htmlString = trivia.TriviaHTMLTemplate)
    setHTML('triviaGame', htmlString)
}


export class triviaController {
    constructor() {
        this.getTrivias()
        AppState.on('trivias', _drawTrivia)
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
}


