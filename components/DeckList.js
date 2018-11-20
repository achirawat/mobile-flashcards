import React, { Component } from 'react'
import {  View, Text, StyleSheet, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation'
import { white } from '../utils/color'
import { addDeck } from '../actions';

class DeckList extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>

      </ScrollView>
     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
})

export default DeckList;