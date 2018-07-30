import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class DeckListItem extends Component {
  onListItemPress = () => {
    var {title, cards} = this.props
    this.props.navigate({title: title, cards: cards})
  }
  
  render() {
    var {title, cards} = this.props
    
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={() =>
          this.onListItemPress()}>
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