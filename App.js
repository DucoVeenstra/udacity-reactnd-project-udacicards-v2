import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import DeckList from './components/Deck_List';
import DeckAdd from './components/Deck_Add';

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
        <View style={styles.container}>
          <DeckList />
          <DeckAdd />
        </View>
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