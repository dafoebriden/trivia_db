import { triviaController } from "./controllers/TriviaController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [triviaController],
    view: ``

  }
])