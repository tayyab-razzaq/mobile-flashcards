import {Map} from 'immutable';
import {
	GET_ALL_DECKS,
	GET_SINGLE_DECK,
	SAVE_NEW_DECK,
	ADD_CARD_TO_DECK,
	DELETE_DECK
} from '../common/actionTypes';

const initialState = new Map({
	statusSuccess: false,
	decks: {},
	deck: {
		title: '',
		questions: []
	},
	questions: [],
	question: {}
});

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_DECKS:
		case SAVE_NEW_DECK:
		case DELETE_DECK:
			return state.merge({decks: action.response});
		case GET_SINGLE_DECK:
		case ADD_CARD_TO_DECK:
			return state.merge({deck: action.response});
		default:
			return state;
	}
};