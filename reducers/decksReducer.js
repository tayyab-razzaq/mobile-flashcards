import {Map} from 'immutable';
import {
	GET_ALL_DECKS,
	GET_SINGLE_DECK,
	SAVE_NEW_DECK,
	ADD_CARD_TO_DECK,
	DELETE_DECK
} from '../common/actionTypes';

const initialState = new Map({
	decks: {},
	deck: {
		title: '',
		questions: []
	}
});

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_DECKS:
		case SAVE_NEW_DECK:
		case DELETE_DECK:
			return state.merge({decks: action.response});
		case GET_SINGLE_DECK:
			return state.merge({deck: action.response});
		case ADD_CARD_TO_DECK:
			return state.merge({
				deck: action.response,
				decks: {
					...state.get('decks'),
					[action.title]: {...action.response}
				}
			});
		default:
			return state;
	}
};