import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
// The deck title
// Number of cards in the deck
// Option to start a quiz for that deck
// Option to add a new question to the deck

//function DeckListItem ({title, cards, navigate}) {



class DeckListItem extends Component {
  render() {
    //const { navigation } = this.props;
    //const titleDeck = navigation.getParam('title', 'deckTitle');

    //console.log(this.props.decks)
    var {title, cards} = this.props
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={() =>
          this.props.navigate({title: title, cards: cards})}>
          <Text style={styles.textTitle} >{title}</Text>
          <Text style={styles.textSubTitle}>{cards.length} cards</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
	return {
		decks: state
	}
}

export default connect(mapStateToProps)(DeckListItem);

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 25,
    textAlign: 'center'
  },
  textSubTitle: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center'
  },
  container: {
    alignItems: 'center',
    borderBottomColor: '#555',
    borderBottomWidth: 0.5,
    height: 60,
    paddingTop: 5
  }
});