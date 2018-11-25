import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { addCardToDeck, getDeck } from '../utils/api'
import { connect } from 'react-redux'
import { addCard } from '../actions'

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
    }
    isDisabled = () => {
        const { question, answer } = this.state

        if (question === '' || answer === '') {
            return true
        } else {
            return false
        }
    }
    onSubmit = () => {
        const { question, answer } = this.state
        const { dispatch } = this.props
        const title = this.props.navigation.state.params.id
        const card = {question: question, answer: answer}

        addCardToDeck(title, card)

        getDeck(title)

        dispatch(addCard(title, card))

        this.setState({
            question: '',
            answer: ''
        })

        this.props.navigation.navigate('Deck', {deck: {title: title, questions: []}})
    }
    render() {
        const { question, answer } = this.state
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>New Card</Text>
                <TextInput style={styles.input} underlineColorAndroid="transparent" placeholder="Question" onChangeText={(question) => this.setState({ question })}/>
                <TextInput style={styles.input} underlineColorAndroid="transparent" placeholder="Answer" onChangeText={(answer) => this.setState({ answer })}/>
                <TouchableOpacity style={styles.submitBtn} onPress={this.onSubmit} isDisabled={this.isDisabled()}>
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
      justifyContent: 'center'
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
    btnText: {
      color: "white",
      fontSize: 20
    },
    input: {
      textAlign: 'center',
      alignItems: 'center',
      borderColor: "grey",
      borderWidth: 1,
      width: 200,
      margin: 10,
      borderRadius: 5,
      fontSize: 20
    },
})

function mapStateToProps () {
    return {
  
    }
}
  
export default connect(mapStateToProps)(AddCard)