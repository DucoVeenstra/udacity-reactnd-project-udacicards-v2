import React from 'react';
import { View, Text } from 'react-native';


function DeckListItem ({title}) {
  return(
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default DeckListItem;