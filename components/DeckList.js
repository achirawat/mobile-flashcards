import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native'
import Deck from './Deck'
import { getDecks } from '../utils/api'
import DeckListItem from './DeckListItem'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'

class DeckList extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    getDecks().then((deckList) => dispatch(receiveDecks(deckList)))
  }

  render() {
    const { deckList } = this.props
    return (
      <ScrollView style={styles.container}>
        {Object.keys(deckList).map((deck) => (
          <TouchableOpacity
            key={deck}
            onPress={() => this.props.navigation.navigate('Deck', {deck: deckList[deck]})}>
            <DeckListItem deck={deckList[deck]} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

function mapStateToProps (deckList) {
  return {
    deckList
  }
}

export default connect(mapStateToProps)(DeckList)
