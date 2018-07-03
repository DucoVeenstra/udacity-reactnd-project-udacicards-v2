import React, {Component} from 'react';
import { View, Text, ScrollView, AsyncStorage  } from 'react-native';
import { connect } from 'react-redux'

import { getCardDecks } from '../utils/helpers';
import DeckListItem from './Deck_ListItem';
import { fetchDecks } from '../utils/api';
import { receiveDecks } from '../actions'

import {DECKS_STORAGE_KEY} from '../utils/helpers';


class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    
    fetchDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });
  }
  
  render() {
    console.log('new');
    return(
      <ScrollView>
        {Object.keys(this.props.decks).map((key) => {
          const {title, ...rest} = this.props.decks[key];
          return (
            <DeckListItem key={key} title={title} />
          )
        })}
      </ScrollView>
    );
  }
}

function mapStateToProps(state, ownProps) {
	return {
		decks: state
	}
}

export default connect(mapStateToProps)(DeckList)