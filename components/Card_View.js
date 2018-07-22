import React, {Component} from 'react';
import { View, Text, StyleSheet  } from 'react-native';

import { connect } from 'react-redux';

class CardView extends Component {
	render() {
		return (
			<View><Text>Hallo</Text></View>
		)
	}
}
function mapStateToProps(state, ownProps) {
	return {
		decks: state
	}
}

export default connect(mapStateToProps)(CardView);

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