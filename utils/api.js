import { AsyncStorage } from 'react-native'
import { formatData, STORAGE_KEY }  from './Data'

export function fetchData () {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((decks) => {
      return formatData(decks)
    })
}

function formatDeck (title) {
  return {
    [title] : {
      title: title,
      questions: [],
    }
  }
}

export function addDeck (title) {
  AsyncStorage.mergeItem(STORAGE_KEY,JSON.stringify(formatDeck(title)))
}

export function deleteDeck (id) {
  AsyncStorage.getItem(STORAGE_KEY)
    .then((decks) => {
      const deckList = JSON.parse(decks)
      deckList[id] = undefined
      delete deckList[id]
      AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(deckList))
    })
}

export function addQuestion (id,question,answer) {
  const arrayAdd = [{
    question: question,
    answer: answer,
  }]
  AsyncStorage.getItem(STORAGE_KEY)
  .then((decks) => {
    const deck = JSON.parse(decks)
    deck[id] = {
      ...deck[id],
      questions: deck[id].questions.concat(arrayAdd)
    }
    AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(deck))
  })
}