import { AppState } from "../AppState.js"
import { trivasService } from "../services/TriviaService.js"
import { Pop } from "../utils/Pop.js"


function _drawTrivias() {
    const trivias = AppState.trivias
    let htmlString = ''
    trivias.forEach(trivia => htmlString += trivia.TriviaHTMLTemplate)
}


export class triviaController {
    constructor() {
        console.log('saying hello from the constructor')
        this.getTrivias()
        AppState.on('trivias', _drawTrivias)
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


