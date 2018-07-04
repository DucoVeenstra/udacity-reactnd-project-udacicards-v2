// import React, {Component} from 'react';
// import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

// import { addCardToDeck, } from '../utils/api';
// import TextButton from './TextButton';

// import { connect } from 'react-redux';
// import { addDeck} from '../actions';

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 30,
//   },
//   input: {
//     fontSize: 20,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 5
//   }
// });


// class CardAdd extends Component {
//   state = {
//     deckQuestionInput: '',
//     deckAnswerInput: ''
//   }

//   handleOnPressSubmit = () => {
//     console.log("aadf");
//     const card = { question = this.state.deckQuestionInput, answer = this.state.deckAnswerInput }

//     // const key = this.state.deckTitleInput;
//     // const deck = {
//     //   title: this.state.deckTitleInput,
//     //   questions: []
//     // };

//     // Update state (Dispatch)
//     // this.props.dispatch(addDeck({
//     //   [key]: deck
//     // }));

//     // Routing
//     // Pressing the button correctly creates the deck and routes the user to the Individual Deck view for the new deck.

//     // Update database
//     console.log('addCardToDeck', card, this.props.title);
//     //addCardToDeck(card, this.props.title);

//     // Clear local nofication
//   }

//   render() {
//     console.log('card_add', this.props);
//     return(
//       <View>
//         <TextInput 
//           style={styles.input} placeholder={"The question for this card"}
//           onChangeText={(deckQuestionInput) => this.setState({deckQuestionInput})}
//           value={this.state.deckQuestionInput} />
//         <TextInput 
//           style={styles.input} placeholder={"The answer for this card."}
//           onChangeText={(deckAnswerInput) => this.setState({deckAnswerInput})}
//           value={this.state.deckAnswerInput} />
//         <TextButton
//           onPress={this.handleOnPressSubmit}>
//             Submit
//         </TextButton>
//       </View>
//     );
//   }
// }

// export default connect(null)(CardAdd);