import React, {Component} from 'react';
import { View, ScrollView, StyleSheet  } from 'react-native';
import { connect } from 'react-redux';

import DeckListItem from './ListItemDeck';
import { fetchDecks } from '../utils/api';
import { receiveDecks } from '../actions';

class DeckList extends Component {
  static navigationOptions = {  
    title: 'DECKS'     
  };
  
  componentDidMount() {
    const { dispatch } = this.props;
    
    fetchDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });
  }

  navigateToDeck = (deck) => {
    this.props.navigation.navigate('DeckView', {title: deck.title, cards: deck.cards})
  }
  
  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          {Object.keys(this.props.decks).map((key) => {
            const {title, ...rest} = this.props.decks[key];
            return (
              <View key={key} >
                <DeckListItem title={title} cards={this.props.decks[key].questions} navigate={this.navigateToDeck} />
              </View>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
	return {
		decks: state
	}
}

export default connect(mapStateToProps)(DeckList)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
});