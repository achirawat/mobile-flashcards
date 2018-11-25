import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Quiz extends Component {
    state = {
        questionNumber: 0,
        countQuestions: this.props.navigation.state.params.questions.length,
        answered: false,
        finished: false,
        correct: 0,
        incorrect: 0,
        Correct: false,
        Incorrect: false,
        disableNext: true,
        disableCorrect: false,
    }
    showAnswer = () => {
        this.setState({ answered: true })
    }
    onCorrect = () => {
        this.setState({
          correct: this.state.correct + 1,
          showCorrect: true,
          showIncorrect: false,
          disableNext: false,
          disableCorrect: true,
        })
    }
    onNext = () => {
        this.setState({
          questionNumber: this.state.questionNumber + 1,
          answered: false,
          showCorrect: false,
          showIncorrect: false,
          disableNext: true,
          disableCorrect: false,
        })
    }
    onIncorrect = () => {
        this.setState({
          incorrect: this.state.incorrect + 1,
          showIncorrect: true,
          showCorrect: false,
          disableNext: false,
          disableCorrect: true,
         })
    }
    onFinish = () => {
        this.setState({ finished: true})
    }
    onRestart = () => {
        this.setState({
          questionNumber: 0,
          answered: false,
          finished: false,
          correct: 0,
          incorrect: 0,
          showCorrect: false,
          showIncorrect: false,
          disableNext: true,
          disableCorrect: false,
        })
    }
    toHome = () => {
        this.props.navigation.goBack(null)
    }
    render() {
        const questions = this.props.navigation.state.params.questions
        const { questionNumber, countQuestions, answered, finished, correct, incorrect, showCorrect, showIncorrect, disableNext, disableCorrect } = this.state
        if (questions.length === 0) {
            return (
              <View style={styles.container}>
                <Text style={{fontSize: 30}}>Sorry, you cannot take a quiz because there are no cards in the decks.</Text>
              </View>
            )
        }

        if (finished === true) {
            return (
              <View style={styles.container}>
                <Text style={{fontSize: 30}}>Youve finished the quiz!</Text>
                <Text style={{fontSize: 20}}>You scored {((correct/countQuestions) * 100).toFixed(0)}%</Text>
                <TouchableOpacity
                  disabled={disableNext}
                  style={styles.nextBtn}
                  onPress={this.toHome}>
                  <Text style={styles.btnText}>Back to Deck</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={disableNext}
                  style={styles.nextBtn}
                  onPress={this.onRestart}>
                  <Text style={styles.btnText}>Restart Quiz</Text>
                </TouchableOpacity>
              </View>
            )
        }
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>{questionNumber + 1}/{countQuestions}</Text>
                {answered === false 
                ?   <View>
                        <Text style={{fontSize: 45, textAlign: 'center'}}>{questions[questionNumber].question}</Text>
                        <TouchableOpacity onPress={this.showAnswer}>
                        <Text style={{fontSize: 30, textAlign: 'center'}}>Answer</Text>
                        </TouchableOpacity>
                    </View>
                :   <View style={{alignItems: 'center', justifyContent: 'center',}}>
                        <Text style={{fontSize: 30, textAlign: 'center'}}>{questions[questionNumber].answer}</Text>
                        {showCorrect === true && (
                            <Text style={{fontSize: 30, textAlign: 'center'}}>Good Job!</Text>
                        )}
                        {showIncorrect === true && (
                            <Text style={{fontSize: 30, textAlign: 'center'}}>Wrong!! Try again</Text>
                        )}
                        <TouchableOpacity disabled={disableCorrect} style={styles.correctBtn} onPress={this.onCorrect}>
                            <Text style={styles.btnText}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={disableCorrect} style={styles.incorrectBtn} onPress={this.onIncorrect}>
                            <Text style={styles.btnText}>Incorrect</Text>
                        </TouchableOpacity>
                        {questionNumber + 1 === countQuestions
                        ?
                            <TouchableOpacity disabled={disableNext} style={styles.nextBtn} onPress={this.onFinish}>
                                <Text style={styles.btnText}>Finish</Text>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity disabled={disableNext} style={styles.nextBtn} onPress={this.onNext}>
                                <Text style={styles.btnText}>Next</Text>
                            </TouchableOpacity>
                        }
                    </View>
                }
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
    nextBtn: {
      width: 200,
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
    correctBtn: {
      width: 200,
      backgroundColor: "green",
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
    incorrectBtn: {
      width: 200,
      backgroundColor: "red",
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
})
  
export default Quiz