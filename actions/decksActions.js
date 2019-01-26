import {
	GET_ALL_DECKS,
	SAVE_NEW_DECK,
	GET_SINGLE_DECK,
	ADD_CARD_TO_DECK
} from "../common/actionTypes";
import * as API from "../utils/_DATA";

function allDecksFetched(response) {
	return {response, type: GET_ALL_DECKS}
}

export function getAllDecks() {
	return dispatch => API.getDecks().then(response => dispatch(allDecksFetched(response)));
}

function newDeckSaving(response) {
	return {response, type: SAVE_NEW_DECK}
}

export function saveNewDeck(title) {
	return dispatch => API.saveDeckTitle(title).then(response => dispatch(newDeckSaving(response)));
}

function deckFetched(response) {
	return {response, type: GET_SINGLE_DECK}
}

export function getDeck(id) {
	return dispatch => API.getDeck(id).then(response => dispatch(deckFetched(response)));
}

function newCardSaving(response) {
	return {response, type: ADD_CARD_TO_DECK}
}

export function addCardToDeck(title, card) {
	return dispatch => API.addCardToDeck(title, card).then(response => dispatch(newCardSaving(response)));
}