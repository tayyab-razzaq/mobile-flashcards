import {AsyncStorage} from 'react-native'
import {APP_STORE_KEY} from '../common/constants';


export const getDecks = () => AsyncStorage.getItem(APP_STORE_KEY).then(JSON.parse);

export const getDeck = id => new Promise(res => {
	setTimeout(() => getDecks().then(decks => res(decks ? {...decks[id]} : {})), 100);
});

export const saveDeckTitle = title => new Promise(res => {
	setTimeout(() => {
		AsyncStorage.mergeItem(APP_STORE_KEY, JSON.stringify({
			[title]: {
				title,
				questions: []
			}
		}), () => getDecks().then(decks => res({...decks})));
		
		
	});
}, 100);

export const removeDeck = title => new Promise(res => {
	setTimeout(() => {
		getDecks().then(decks => {
			AsyncStorage.removeItem(APP_STORE_KEY, () => {
				const filteredDecks = Object.keys(decks).filter(key => key !== title);
				const updatedDecks = {};
				filteredDecks.forEach(key => {
					updatedDecks[key] = decks[key];
				});
				AsyncStorage.mergeItem(APP_STORE_KEY, JSON.stringify(updatedDecks));
				res({...updatedDecks});
			});
		});
	}, 100);
});

export const addCardToDeck = (title, card) => new Promise(res => {
	getDeck(title).then(deck => {
		AsyncStorage.mergeItem(APP_STORE_KEY, JSON.stringify({
			[title]: {
				title,
				questions: [...deck.questions, card]
			}
		}), () => getDeck(title).then(deck => res({...deck})));
	});
});