export const RECEIVE_DECK = 'RECEIVE_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const DELETE_DECK = 'DELETE_DECK'

export function receiveDeck (deckList) {
  return {
    type: RECEIVE_DECK,
    deckList,
  }
}

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title
  }
}

export function addQuestion (title, question) {
  return {
    type: ADD_QUESTION,
    title, 
    question
  }
}

export function deleteDeck (id) {
  return {
    type: DELETE_DECK,
    id,
  }
}