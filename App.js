import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'

const route = {
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck'
    }
  },
  AddDecks: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck'
    }
  }
}

const tabNavigation = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: white,
    style: {
      height: 56,
      backgroundColor: purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}

const Tabs = Platform.OS === 'ios' ? 
  createBottomTabNavigator(route, tabNavigation) : createMaterialTopTabNavigator(route, tabNavigation)

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  EntryDetail: { 
    screen: EntryDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }  
})

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: "#1051b1", height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={"#1051b1"} barStyle='light-content' />
          </View>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}