import { AsyncStorage } from 'react-native'
import dummyData  from './Data'

const STORAGE_KEY = 'DeckList'

function setDummyData () {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dummyData))
  return dummyData
}

export function formatData (decks) {
  return decks === null
    ? setDummyData()
    : JSON.parse(decks)
}