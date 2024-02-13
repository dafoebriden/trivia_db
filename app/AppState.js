import { Trivia } from './models/Trivia.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Trivia[]} */
  trivias = []

  /**@type {Trivia | null} */
  activeQuestion = null
}

export const AppState = createObservableProxy(new ObservableAppState())