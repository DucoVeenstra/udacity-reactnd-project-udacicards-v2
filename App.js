import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import {blue, gray, black} from './utils/colors';
import reducer from './reducers';
import DeckList from './components/Deck_List';
import DeckAdd from './components/Deck_Add';

const Tabs = createBottomTabNavigator(
  {
    Decks: DeckList,
    CreateDeck: DeckAdd
  },
  {
    tabBarOptions: {
      activeTintColor: black,
      inactiveTintColor: gray,
      labelStyle: {
        fontSize: 18,
      },
      style: {
        backgroundColor: blue,
        borderLeftColor: gray,
        borderLeftWidth: 1
      },
    }
  }
);

const RootStack = createStackNavigator(
  {  
    Home: Tabs,
    DeckList
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: blue,
      },
      title: 'Quiz Cards'
    }
  }
);

export default class App extends Component {
  createDeck = () => {
    // Update Redux

    // Navigate to home

    // Save to 'DB'

    // Clear local notification
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <RootStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    top: 50,
    margin: 10,
  },
});