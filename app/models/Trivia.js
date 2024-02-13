export class Trivia {
    constructor(data) {
        this.type = data.type
        this.difficulty = data.difficulty
        this.category = data.category
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
    }

    get TriviaHTMLTemplate() {
        return `
    <div class="row d-flex justify-content-center">
        <div class="col-12 d-flex justify-content-center text-light m-2">
            <h2>Trivia Time!</h2>
        </div>
        <div class="col-12">
            <img src="" alt="">
            <img src="" alt="">
        </div>
        <div class="col-12 d-flex flex-column justify-content-center text-center bg-light border border-primary border-3 rounded fw-bold m-2 ">
            <h4 class="mb-2">Question:</h4>
            <p class="m-0 p-2">${this.question}</p>
        </div>
        ${this.eachAnswer}
        ${this.allAnswers}
    </div>
    `
    }
    get eachAnswer() {
        return this.incorrectAnswers.splice(1, 0, 'wierdo')
    }
    get allAnswers() {
        return this.eachAnswer.map(answer => {
            return `
            <div onclick="app.TriviaController.submitAnswer()" class="col-3 text-center bg-light border border-primary border-3 rounded fw-bold m-2" type="button">
                <p class="m-0 p-2">${this.eachAnswer}</p>
            </div>
            `   })
    }
}
