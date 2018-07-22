import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';


class Quiz extends Component {
  state = {
		questionsIndex: 0,
		correct: 0,
		flipCard: false,
  }

  
  
  render() {;
    const { navigation } = this.props;
    const titleDeck = navigation.getParam('deckTitle', 'deckTitle');
    
    console.log(this.props.decks[titleDeck].questions)
    return (
      <View>
        <Text>Quiz</Text>
        <Text>{titleDeck}</Text>
        <Text>questions {this. props.decks[titleDeck].questions.length}</Text>
        <Text>{this.props.decks[titleDeck].questions[this.state.questionsIndex].question}</Text>
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