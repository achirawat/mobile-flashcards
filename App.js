import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'
import { white, purple } from './utils/color';
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import AddDeck from './components/AddDeck'

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

// const Tabs = Platform.OS === 'ios' ? 
//   createBottomTabNavigator(route, tabNavigation) : createMaterialTopTabNavigator(route, tabNavigation)
const Tabs = createMaterialTopTabNavigator(route, tabNavigation)

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
        backgroundColor: "#1051b1",
        height: 40,
      }
    }
  },
  // AddCard: {
  //   screen: AddCard,
  //   navigationOptions: {
  //     headerTintColor: "white",
  //     headerStyle: {
  //       backgroundColor: "#1051b1",
  //       height: 40,
  //     }
  //   }
  // },
  // Quiz: {
  //   screen: Quiz,
  //   navigationOptions: {
  //     headerTintColor: "white",
  //     headerStyle: {
  //       backgroundColor: "#1051b1",
  //       height: 40,
  //     }
  //   }
  // },
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