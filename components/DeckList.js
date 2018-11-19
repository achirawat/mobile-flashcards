import React, { Component } from 'react'
import {  View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation'
import { addDeck } from '../actions';

class DeckList extends Component {
  state = {

  }

submit = () => {
  this.props.dispatch(addDeck({
    [key]: deck
  }))
}
  render() {
    return (
      <View>
        
      </View>
    );
  }
}

export default DeckList;