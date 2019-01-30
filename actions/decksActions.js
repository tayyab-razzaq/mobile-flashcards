import {
	GET_ALL_DECKS,
	SAVE_NEW_DECK,
	GET_SINGLE_DECK,
	ADD_CARD_TO_DECK,
	DELETE_DECK
} from "../common/actionTypes";
import * as API from "../utils/_DATA";

const allDecksFetched = response => ({response, type: GET_ALL_DECKS});

export const getAllDecks = () => dispatch => API.getDecks().then(response => dispatch(allDecksFetched(response)));

const newDeckSaving = response => ({response, type: SAVE_NEW_DECK});

export const saveNewDeck = title => dispatch =>
	API.saveDeckTitle(title).then(response => dispatch(newDeckSaving(response)));

const deckDeleting = response => ({response, type: DELETE_DECK});

export const deleteDeck = title => dispatch => API.removeDeck(title).then(response => dispatch(deckDeleting(response)));

const deckFetched = response => ({response, type: GET_SINGLE_DECK});

export const getDeck = id => dispatch => API.getDeck(id).then(response => dispatch(deckFetched(response)));

const newCardSaving = (title, response) => ({title, response, type: ADD_CARD_TO_DECK});

export const addCardToDeck = (title, card) => dispatch =>
	API.addCardToDeck(title, card).then(response => dispatch(newCardSaving(title, response)));