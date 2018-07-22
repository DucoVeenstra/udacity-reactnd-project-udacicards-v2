import { ADD_DECK, RECEIVE_DECKS, UPDATE_DECK, RECEIVE_QUESTIONS } from '../actions';

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case UPDATE_DECK:
      return {
        ...state,
        ...action.deck
      }
    case RECEIVE_QUESTIONS:  
    return {
        ...action.questions
      }
    default:
      return state
  }
}

export default decks