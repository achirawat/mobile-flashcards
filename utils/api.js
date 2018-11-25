import { AsyncStorage } from 'react-native'
import { dummyData, STORAGE_KEY }  from './Data'

export function getDecks () {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    if (!results) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dummyData))
      return dummyData
    }
    else {
      return JSON.parse(results)
    }
  })
}

export function getDeck (id) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(results => JSON.parse(results))
    .then(results => results[id])
}

export function saveTitle (title) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(title))
}

export function addCardToDeck (title, card) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(decks => JSON.parse(decks))
    .then(decks => {
      decks[title].questions.push(card)
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
      return decks
    })
}