import {
	GET_ALL_DECKS,
	SAVE_NEW_DECK,
	GET_SINGLE_DECK,
	ADD_CARD_TO_DECK,
	DELETE_DECK
} from "../common/actionTypes";
import * as API from "../utils/_DATA";

const allDecksFetched = response => {
	return {response, type: GET_ALL_DECKS}
};

export const getAllDecks = () => {
	return dispatch => API.getDecks().then(response => dispatch(allDecksFetched(response)));
};

const newDeckSaving = response => {
	return {response, type: SAVE_NEW_DECK}
};

export const saveNewDeck = title => {
	return dispatch => API.saveDeckTitle(title).then(response => dispatch(newDeckSaving(response)));
};

const deckDeleting = response => {
	return {response, type: DELETE_DECK}
};

export const deleteDeck = title => {
	return dispatch => API.removeDeck(title).then(response => dispatch(deckDeleting(response)));
};

const deckFetched = response => {
	return {response, type: GET_SINGLE_DECK}
};

export const getDeck = id => {
	return dispatch => API.getDeck(id).then(response => dispatch(deckFetched(response)));
};

const newCardSaving = response => {
	return {response, type: ADD_CARD_TO_DECK}
};

export const addCardToDeck = (title, card) => {
	return dispatch => API.addCardToDeck(title, card).then(response => dispatch(newCardSaving(response)));
};