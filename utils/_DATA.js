import {AsyncStorage} from 'react-native'
import {APP_STORE_KEY} from '../common/constants';


export const getDecks = () => {
	return AsyncStorage.getItem(APP_STORE_KEY).then(JSON.parse);
};

export const getDeck = id => {
	return new Promise(res => {
		setTimeout(() => getDecks().then(decks => res({...decks[id]})), 100);
	});
};

export const saveDeckTitle = title => {
	return new Promise(res => {
		setTimeout(() => {
			AsyncStorage.mergeItem(APP_STORE_KEY, JSON.stringify({
				[title]: {
					title,
					questions: []
				}
			}), () => getDecks().then(decks => res({...decks})));
		}, 100);
	});
};

export const addCardToDeck = (title, card) => {
	return new Promise(res => {
		getDeck(title).then(deck => {
			AsyncStorage.mergeItem(APP_STORE_KEY, JSON.stringify({
				[title]: {
					title,
					questions: [...deck.questions, card]
				}
			}), () => getDeck(title).then(deck => res({...deck})));
		});
	});
};
