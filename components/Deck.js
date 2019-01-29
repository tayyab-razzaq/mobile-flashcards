import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteDeck} from '../actions/decksActions';
import styles from '../utils/styles';
import { View, Text, TouchableOpacity } from 'react-native';

class Deck extends Component {
	static navigationOptions = {
		title: 'Deck Detail',
	};
	
	onAddCardClick = () => {
		const { navigate } = this.props.navigation;
		navigate('AddCard');
	};
	
	onStartQuizClick = () => {
		const deck = this.props.decksReducer.get('deck') || {};
		const { navigate } = this.props.navigation;
		navigate('DeckQuestions', {deck});
	};
	
	deleteDeck = () => {
		const {title} = this.props.decksReducer.get('deck');
		this.props.deleteDeck(title);
	};
	
	render() {
		const deck = this.props.decksReducer.get('deck') || {};
		const { questions } = deck;
		const questionsCount = questions.length;
		const disabled = questionsCount === 0;
		const disabledClass = disabled ? styles.disabledClass : {};
		return (
			<View style={styles.container}>
				<View style={styles.deckHolder}>
					<Text style={styles.deckTitle}>{deck.title}</Text>
					<Text style={styles.questionsCount}>{`${questionsCount} Cards`}</Text>
				</View>
				<View>
					<TouchableOpacity
						onPress={this.onAddCardClick}
						style={{...styles.regularBtn, ...styles.addCardBtn}}>
						<Text style={styles.addCardBtn}>Add Card</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.onStartQuizClick}
						disabled={disabled}
						style={{...styles.regularBtn, ...styles.startQuizBtn, ...disabledClass}}>
						<Text style={{...styles.startQuizBtn, ...disabledClass}}>Start Quiz</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.deleteDeck}
						disabled={disabled}
						style={{...styles.regularBtn, ...styles.deleteDeckBtn}}>
						<Text style={styles.deleteDeckBtn}>Delete Deck</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({ decksReducer }) => ({ decksReducer });

const mapDispatchToProps = dispatch => ({
	deleteDeck: title => dispatch(deleteDeck(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
