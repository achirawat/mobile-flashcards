import { RECEIVE_DECK, ADD_DECK, ADD_QUESTION } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECK:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case ADD_QUESTION:
      const id = action
      return {
        ...state,
        [id]: {
          ...state[id],
          question: question(state[id].questions, action)
        }
      }
    default: 
      return state
  }
}

export default decks