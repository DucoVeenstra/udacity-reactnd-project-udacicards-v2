//color red  e60000
import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { submitDeck } from '../utils/api';
import TextButton from './TextButton';

import { connect } from 'react-redux';
import { updateDeck } from '../actions';

class CardAdd extends Component {
  state = {
    deckQuestionInput: '',
    deckAnswerInput: '',
    error: false
  }

  static navigationOptions = {
    title: `Add Card`
  }

  inputValidation = () => {
    let error = false;
    if (this.state.deckQuestionInput.length === 0) {
      error = true;
    }

    if (this.state.deckAnswerInput.length === 0) {
      error = true
    }
    return error;
  }

  handleOnPressSubmit = () => {
    const { navigation } = this.props;
    const titleDeck = navigation.getParam('deckTitle', 'deckTitle');

    if (!this.inputValidation()) {
      const card = { 
        question: this.state.deckQuestionInput, 
        answer: this.state.deckAnswerInput }
  
      const key = titleDeck;
      const deck = {
        title: titleDeck,
        questions: this.props.decks[titleDeck].questions.concat([card])
      };

      // Update state (Dispatch)
      this.props.dispatch(updateDeck({
        [key]: deck
      }));

      // Routing
      // Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.

      // Update database
      submitDeck({key, deck});

        // Reset state
        this.setState({
          deckQuestionInput: '',
          deckAnswerInput: '',
          error: false
        })
    } else {
      this.setState({error: true})
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput 
          style={[styles.input, {marginTop: 20}]} placeholder={"The question for this card"}
          onChangeText={(deckQuestionInput) => this.setState({deckQuestionInput})}
          value={this.state.deckQuestionInput} />
        <TextInput 
          style={styles.input} placeholder={"The answer for this card."}
          onChangeText={(deckAnswerInput) => this.setState({deckAnswerInput})}
          value={this.state.deckAnswerInput} />
        <TextButton
          onPress={this.handleOnPressSubmit}
          color={'#000'}>
          <Text>Submit</Text>
        </TextButton>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
	return {
		decks: state
	}
}

export default connect(mapStateToProps)(CardAdd);

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
    padding: 5,
    width: '100%',
    marginBottom: 20
  },
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 10,
    alignItems: 'center',
    height: '100%'
  }
});