let decks = {
	React: {
		title: 'React',
		questions: [
			{
				question: 'What is React?',
				answer: 'A library for managing user interfaces',
			},
			{
				question: 'Where do you make Ajax requests in React?',
				answer: 'The componentDidMount lifecycle event',
			},
		],
	},
	JavaScript: {
		title: 'JavaScript',
		questions: [
			{
				question: 'What is a closure?',
				answer:
					'The combination of a function and the lexical environment within which that function was declared.',
			},
		],
	},
};

export function getDecks() {
	return new Promise(res => {
		setTimeout(() => res({ ...decks }), 100);
	});
}

export function getDeck(id) {
	return new Promise(res => {
		setTimeout(() => res({ ...decks[id] }), 100);
	});
}

export function saveDeckTitle(title) {
	return new Promise(res => {
		setTimeout(() => {
			decks = {
				...decks,
				[title]: {
					title: title,
					questions: [],
				},
			};
			res(decks);
		}, 100);
	});
}

export function addCardToDeck(title, card) {
	return new Promise(res => {
		setTimeout(() => {
			decks = {
				...decks,
				[title]: {
					...decks[title],
					questions: [...decks[title].questions, card],
				},
			};
			res({ ...decks[title] });
		}, 100);
	});
}
