import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { getDeck } from '../utils/api'
import { connect } from 'react-redux'

class Deck extends Component {

  render() {
    const title = this.props.navigation.state.params.deck.title
    let questions = this.props.navigation.state.params.deck.questions

    if(this.props.deckList[title].questions !== []){
      questions = this.props.deckList[title].questions
    }

    let numOfCards = 0
    questions === []
      ? numOfCards = '0 cards'
      : numOfCards = questions.length + ' cards'

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>{title}</Text>
        <Text style={{fontSize: 20}}>{numOfCards}</Text>
        <TouchableOpacity
          style={styles.submitBtn2}
          onPress={() => this.props.navigation.navigate('AddCard', {id: title})}>
          <Text style={styles.btnText2}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => this.props.navigation.navigate('Quiz', {id: title, questions: questions})}>
          <Text style={styles.btnText}>Start Quiz</Text>
        </TouchableOpacity>
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
  submitBtn: {
    backgroundColor: "#1051b1",
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  submitBtn2: {
    backgroundColor: "white",
    borderColor: "#1051b1",
    borderWidth: 1,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  btnText: {
    color: "white",
    fontSize: 20
  },
  btnText2: {
    color: "#1051b1",
    fontSize: 20
  }
})

function mapStateToProps (deckList) {
  const title = {}
  return {
    deckList
  }
}
export default connect(mapStateToProps)(Deck)
