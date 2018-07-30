import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { connect } from 'react-redux';

import TextButton from './TextButton';
import {red, green, gray} from '../utils/colors';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class Quiz extends Component {
  state = {
		questionsIndex: 0,
		correct: 0,
    showAnswer: false,
    showScore: false
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Quiz: ${navigation.state.params.deckTitle}`
  });
  
  increment = () => {
    const titleDeck = this.props.navigation.getParam('deckTitle', 'deckTitle');
    const questionsLength = this.props.decks[titleDeck].questions.length;
    let index = this.state.questionsIndex
    let incrementedIndex = 1 + index;
    if (incrementedIndex < questionsLength) {
      return true;
    }
    if (incrementedIndex === questionsLength) {
      this.setState({showScore: true});
    }
    return  false;
  }

  answerWasCorrect = () => {
    this.setState({correct: this.state.correct === 0 ? 1 : 1 + this.state.correct});
    if(this.increment()) {
      this.setState({questionsIndex: this.state.questionsIndex + 1});
    }
  }

  answerWasIncorrect = () => {
    if(this.increment()) {
      this.setState({questionsIndex: this.state.questionsIndex + 1});
    }    
  }

  quiz = () => {
    const { navigation } = this.props;
    const titleDeck = navigation.getParam('deckTitle', 'deckTitle');
    const counter = this.state.questionsIndex + 1;

    return(
      <View>
        <View style={styles.quizIndex}>
          <Text style={styles.quizIndexText}>{`${counter} / ${this.props.decks[titleDeck].questions.length}`}</Text>
        </View>
        <View style={styles.container}>        
          <Text style={styles.textQuestion}>{this.props.decks[titleDeck].questions[this.state.questionsIndex].question}</Text>
          <Text style={styles.textAnswer} onPress={() => {this.setState({showAnswer: true})}}>Answer</Text>
          <View style={{marginTop: 60}}>
            <TextButton  color={green} onPress={() => this.answerWasCorrect()}>
              <Text>Correct</Text>
            </TextButton>
          </View>
          <View style={{marginTop: 10}}>
            <TextButton color={red} onPress={() => this.answerWasIncorrect()}>
              <Text>Incorrect</Text>
            </TextButton>
          </View>
        </View>
      </View>
    )
  }

  showAnswer = () => {
    const { navigation } = this.props;
    const titleDeck = navigation.getParam('deckTitle', 'deckTitle');

    return (
      <View style={styles.container}>
        <Text style={styles.textQuestion}>{this.props.decks[titleDeck].questions[this.state.questionsIndex].answer}</Text>
        <View style={{marginTop: 40}}>
            <TextButton color={gray} onPress={() => this.setState({showAnswer: false})}>
              <Text>Back to quiz</Text>
            </TextButton>
          </View>
      </View>
    )
  }

  showScore = () => {
    const { navigation } = this.props;
    const titleDeck = navigation.getParam('deckTitle', 'deckTitle');

    // Clear local nofication
    clearLocalNotification()
      .then(setLocalNotification())

    return (
      <View style={styles.container}>
        <Text style={styles.textQuestion}>{`You complete this quiz with ${this.state.correct} correct ${this.state.correct > 1 ? "answers" : "answer"} out of ${this.props.decks[titleDeck].questions.length} questions.`}</Text>
        <View style={{marginTop: 60}}>
          <TextButton  color={gray} onPress={() => this.props.navigation.navigate('DeckView', {title: titleDeck, cards: this.props.decks[titleDeck].questions})}>
            <Text>Back to Deck</Text>
          </TextButton>
        </View>
        <View style={{marginTop: 10}}>
          <TextButton color={green} onPress={() => this.setState({correct: 0, showScore: false, questionsIndex: 0})}>
            <Text>Restart Quiz</Text>
          </TextButton>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
        {this.state.showScore ? this.showScore() : this.state.showAnswer ? this.showAnswer() : this.quiz()}
      </View>
    )
  }
}

function mapStateToProps(state, ownProps) {
	return {
		decks: state
	}
}

export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 10,
    alignItems: 'center',
    height: '100%'
  },
  quizIndex: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingTop: 10
  },
  quizIndexText: {
    fontSize: 12,
    paddingBottom: 10
  },
  textQuestion: {
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 60
  },
  textAnswer: {
    color: red,
    fontSize: 16,
    marginTop: 30
  },
  textSubTitle: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    paddingBottom: 80
  }
});