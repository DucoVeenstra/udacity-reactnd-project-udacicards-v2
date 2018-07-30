import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import {blue, gray, black} from './utils/colors';
import reducer from './reducers';
import DeckList from './components/ListDeck';
import DeckView from './components/ViewDeck';
import DeckAdd from './components/AddDeck';
import CardAdd from './components/AddCard';
import Quiz from './components/ViewQuiz';
import { setLocalNotification } from './utils/helpers';

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
    }
  }
);

export default class App extends Component {
  componentDidMount () {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <RootStack />
      </Provider>
    );
  }
}
