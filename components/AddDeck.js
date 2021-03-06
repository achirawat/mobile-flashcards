import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { saveTitle, getDecks  } from '../utils/api'
import { addDeck, receiveDecks  } from '../actions';

class AddDeck extends Component {
  state = {
    title: ''
  }
  isDisabled = () => {
    const { title } = this.state
    if (title === '') {
      return true
    } else {
      return false
    }
  }
  onSubmit = () => {
    const { title } = this.state
    const { dispatch, deckList } = this.props

    const titleDeck = {}
    titleDeck[title] = {title: title, questions: []}

    saveTitle(titleDeck)

    this.setState({ title: ''})

    dispatch(addDeck(title))

    this.props.navigation.navigate('Deck', {deck: {title: title, questions: []}})
  }
  render() {
    const { title } = this.state
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30}}>New Deck</Text>
        <TextInput style={styles.input} placeholder="Title of New Deck" onChangeText={(title) => this.setState({ title })} value={title}/>
        <TouchableOpacity style={styles.submitBtn} disabled={this.isDisabled()} onPress={this.onSubmit}>
          <Text style={styles.btnText}>Submit</Text>
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
  },
  input: {
    textAlign: 'center',
    alignItems: 'center',
    borderColor: "grey",
    borderWidth: 1,
    width: 300,
    margin: 10,
    borderRadius: 5,
    fontSize: 20
  },
  submitBtn: {
    backgroundColor: "#1051b1",
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    color: "white",
    fontSize: 20
  }
})

function mapStateToProps (deckList) {
  return {
    deckList
  }
}

export default connect(mapStateToProps)(AddDeck)