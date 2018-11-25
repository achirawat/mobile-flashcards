export const RECEIVE_DECK = 'RECEIVE_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDeck (deckList) {
  return {
    type: RECEIVE_DECK,
    deckList,
  }
}

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title,
  }
}

export function addCard (title, question) {
  return {
    type: ADD_CARD,
    title,
    question
  }
}
