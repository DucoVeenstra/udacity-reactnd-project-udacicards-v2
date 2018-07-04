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

export function addCardToDeck({ card, deckTitle }) {
	return AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
		let decks = JSON.parse(result)

		let newQuestions = JSON.parse(
			JSON.stringify(decks[deckTitle].questions)
		)
		newQuestions[newQuestions.length] = card

		const value = JSON.stringify({
			[deckTitle]: { title: deckTitle, questions: newQuestions },
		})
		AsyncStorage.mergeItem(STORAGE_KEY, value)
	})
}

// https://github.com/gsal0115/MobileFlashcards/blob/master/components/DeckList.js