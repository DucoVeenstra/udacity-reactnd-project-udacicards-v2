import React from 'react';
import { View, Text } from 'react-native';

import AddCard from './Card_Add';

// The deck title
// Number of cards in the deck
// Option to start a quiz for that deck
// Option to add a new question to the deck

function DeckListItem ({title, cards}) {
  console.log('hallo');
  return(
    <View>
      <Text>{title}</Text>
      <Text>{cards.length} cards</Text>
      <AddCard title={title} cards={cards}/>
    </View>
  );
}

export default DeckListItem;