import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'
import { white, blue } from './utils/color';
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'

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
      backgroundColor: blue,
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

const Tabs = Platform.OS === 'ios' ? createBottomTabNavigator(route, tabNavigation) : createMaterialTopTabNavigator(route, tabNavigation)

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#0500ff",
        height: 40,
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#0500ff",
        height: 40,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#0500ff",
        height: 40,
      }
    }
  },
})

const AppContainer = createAppContainer(MainNavigator)

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <View style={{backgroundColor: "#0500ff", height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={"#0500ff"} barStyle='light-content' />
          </View>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}