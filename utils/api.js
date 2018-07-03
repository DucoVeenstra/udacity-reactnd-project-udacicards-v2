import { AsyncStorage } from 'react-native';
import {DECKS_STORAGE_KEY} from './helpers';

const data = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function starterData() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  return data;
}

export function fetchDecks() {
  console.log('fetchDecks 22');
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    //debugger;
    console.log('ghf',results);
    return results === null ? starterData() : JSON.parse(results);
  }).catch((error) => {
    console.warn('Error while getting decks!', error)
  });

  console.log('show', data);

  //return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  //.then((results) => { return results });
  // return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  //   .then((results) => {
  //     console.log('ghf',results);
  //     return results === null ? starterData() : JSON.parse(results)
  //   })
  //   .catch((error) => {
  //     console.warn('Error while getting decks!', error)
  //   })
}

export function submitDeck ({ key, deck }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: deck
  }))
}

export function removeDeck (key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}




// import React, {Component} from 'react';
// import { View, Text, ScrollView  } from 'react-native';

// import { getCardDecks } from '../utils/helpers';
// import DeckListItem from './Deck_ListItem';



// export default class DeckList extends Component {
//   render() {
//     const metaInfo = getCardDecks();

//     return(
//       <ScrollView>
//         {Object.keys(metaInfo).map((key) => {
//           const {title, ...rest} = metaInfo[key];
//           return (
//             <DeckListItem key={key} title={title} />
//           )
//         })}
//       </ScrollView>
//     );
//   }
// }

// https://github.com/gsal0115/MobileFlashcards/blob/master/components/DeckList.js