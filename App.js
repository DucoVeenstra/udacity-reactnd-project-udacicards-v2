import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator, navigationOptions } from 'react-navigation';
import { FontAwesome, Entypo } from '@expo/vector-icons'

import {blue, gray, black} from './utils/colors';
import reducer from './reducers';
import DeckList from './components/Deck_List';
import DeckView from './components/Deck_View';
import DeckAdd from './components/Deck_Add';
import CardAdd from './components/Card_Add';
import Quiz from './components/Quiz_View';

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
    DeckList,
    DeckView: DeckView,
    CardAdd: CardAdd,
    Quiz: Quiz
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: blue,
      },
      title: 'Quiz Cards',
      
    // headerRight: 
    // <TouchableOpacity onPress={Quiz}>
    //   <FontAwesome name='cog' size={25} color={'#fff'} style={{marginRight: 10}}/>
    // </TouchableOpacity>
    
    
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