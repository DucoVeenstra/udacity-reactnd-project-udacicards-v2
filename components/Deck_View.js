import React, {Component} from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { connect } from 'react-redux'

import TextButton from './TextButton';

class DeckView extends Component {
  
  static navigationOptions = ({ navigation }) => ({
    title: `Deck: ${navigation.state.params.title}`
  });

  startQuiz = (title) => {
    this.props.navigation.navigate('Quiz', {deckTitle: title})
  }

  addCard = (title, cards) => {
    this.props.navigation.navigate('CardAdd', {deckTitle: title, deckCards: this.props.decks[title].questions})
  }

	render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', 'default value title');
    
    return (
			<View style={styles.container}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSubTitle}>{this.props.decks[title].questions.length} cards</Text>
        <TextButton
          onPress={() => this.addCard(title, this.props.decks.questions)}
          color={'#fff'}>
          <Text style={{color: '#000'}}>Add Card</Text>
        </TextButton>
        <View style={{marginTop: 20}}>
        <TextButton
          onPress={() => this.startQuiz(title)}
          color={'#000'}>
          <Text>Start Quiz</Text>
        </TextButton>
        </View>
      </View>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		decks: state
	}
}

export default connect(mapStateToProps)(DeckView)

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
    paddingTop: 60
  },
  textSubTitle: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    paddingBottom: 80
  }
});