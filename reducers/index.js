import { RECEIVE_DECK, ADD_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {

    case RECEIVE_DECK :
      return {
        ...state,
        ...action.deckList
      }

    case ADD_DECK :
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }

    case ADD_CARD :
      const { question, answer } = action.question
      const { title } = action
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...state[title].questions, { question, answer }]
        }
      }

    default :
      return state
  }
}

export default decks