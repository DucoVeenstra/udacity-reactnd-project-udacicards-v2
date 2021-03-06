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
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then((results) => {
    return results === null ? starterData() : JSON.parse(results);
  }).catch((error) => {
    console.warn('Error while getting decks!', error)
  });
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

export async function fetchSingleDeck (deckTitle) {
  let result = await AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
     return JSON.parse(result);
  });

  return Object.assign({}, {questions: JSON.parse(result)[deckTitle].questions});
}

export function updateDeck(deckTitle, deckObject) {
	return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, {[deckTitle]: deckObject})
	})
}