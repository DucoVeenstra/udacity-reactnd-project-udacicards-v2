import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import {submitDeck} from '../utils/api';
import TextButton from './TextButton';

import { connect } from 'react-redux';
import { addDeck} from '../actions';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  input: {
    fontSize: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  }
});


class DeckAdd extends Component {
  state = {
    deckTitleInput: ''
  }

  handleOnPressSubmit = () => {
    // TODO Check if null
    const key = this.state.deckTitleInput;
    const deck = {
      title: this.state.deckTitleInput,
      questions: []
    };

    // TEMP
    //this.setState({deckTitleInput: 'Do Something'});

    // Update state (Dispatch)
    this.props.dispatch(addDeck({
      [key]: deck
    }));

    // Routing
    // Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.

    // Update database
    submitDeck({key, deck});

    // Clear local nofication
  }

  render() {
    return(
      <View>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput 
          style={styles.input} placeholder={"Deck Title"}
          onChangeText={(deckTitleInput) => this.setState({deckTitleInput})}
          value={this.state.deckTitleInput} />
        <TextButton
          onPress={this.handleOnPressSubmit}>
            Create Deck
        </TextButton>
      </View>
    );
  }
}

export default connect(null)(DeckAdd);