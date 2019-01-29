import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllDecks, getDeck } from '../actions/decksActions';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import styles from '../utils/styles';

class DeckList extends Component {
	componentDidMount() {
		this.props.getAllDecks();
	}
	
	onDeckClick = (e, id) => {
		e.preventDefault();
		this.props.getDeck(id).then(() => {
			const { navigate } = this.props.navigation;
			navigate('Deck');
		});
	};
	
	renderDeck = deck => {
		const { questions } = deck;
		const questionsCount = questions.length;
		
		return (
			<TouchableOpacity
				style={styles.deckHolder}
				key={deck.title}
				onPress={e => this.onDeckClick(e, deck.title)}>
				<View>
					<Text style={styles.deckTitle}>{deck.title}</Text>
					<Text style={styles.questionsCount}>{`${questionsCount} Cards`}</Text>
				</View>
			</TouchableOpacity>
		);
	};
	
	render() {
		const decks = this.props.decksReducer.get('decks') || {};
		const deckList = Object.keys(decks).map(deckKey => decks[deckKey]);
		if (deckList.length > 0) {
			
			return (
				<FlatList
					data={deckList} keyExtractor={(item, index) => index}
					renderItem={({item}) => this.renderDeck(item)}
				/>
			);
		}
		return (
			<View style={styles.container}>
				<Text style={styles.content}>
					There is no deck please swipe to next tab to add deck
				</Text>
			</View>
		);
	}
}

const mapStateToProps = ({ decksReducer }) => ({ decksReducer });

const mapDispatchToProps = dispatch => ({
	getAllDecks: () => dispatch(getAllDecks()),
	getDeck: id => dispatch(getDeck(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
