import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckListItem extends Component {

  render() {
    const { deck } = this.props
    let countCards = 0
    deck.questions === []
      ? countCards = '0 cards'
      : countCards = deck.questions.length + ' cards'

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>{deck.title}</Text>
        <Text style={{fontSize: 20}}>{countCards}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
})

export default DeckListItem
