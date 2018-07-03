import { ADD_DECK, RECEIVE_DECKS } from '../actions';

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      console.log('reducer addDeck', {
        ...state,
        ...action.deck
      });
      return {
        ...state,
        ...action.deck
      }
    default:
      return state
  }
}

export default decks