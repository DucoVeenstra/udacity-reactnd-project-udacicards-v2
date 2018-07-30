import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import {submitDeck} from '../utils/api';
import TextButton from './TextButton';

import { connect } from 'react-redux';
import { addDeck } from '../actions';

class DeckAdd extends Component {
  static navigationOptions = {
    title: 'Add New Deck',
  };

  state = {
    deckTitleInput: '',
    error: false
  }

  handleOnPressSubmit = () => {
    const key = this.state.deckTitleInput;
    const deck = {
      title: this.state.deckTitleInput,
      questions: []
    };

    if (this.state.deckTitleInput != 0) {
      // Update state (Dispatch)
      this.props.dispatch(addDeck({
        [key]: deck
      }));

      // Update database
      submitDeck({key, deck});

      this.setState({deckTitleInput: '', error: false});

      // Routing
      // Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.
      this.props.navigation.goBack(null)

    } else {
      this.setState({error:true});
    }
  }

  changeBorderColor = () => {
    return this.state.error ? {borderColor: '#e60000'} : {}
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.textTitle}>{"What is the title\n of your new\ndeck?"}</Text>
        <TextInput 
          style={[styles.input, this.changeBorderColor()]} placeholder={"Deck Title"}
          onChangeText={(deckTitleInput) => this.setState({deckTitleInput})}
          value={this.state.deckTitleInput} />
        <TextButton
          onPress={this.handleOnPressSubmit}
          color={'#000'}
          style={styles.buttonPostion}>
          <Text>Create Deck</Text>
        </TextButton>
      </View>
    );
  }
}

export default connect(null)(DeckAdd);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 10,
    alignItems: 'center',
    height: '100%'
  },
  textTitle: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 30
  },
  input: {
    fontSize: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: '100%',
    marginBottom: 40
  }
});