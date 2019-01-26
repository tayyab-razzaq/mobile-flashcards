import React, { Component } from 'react';
import { connect } from 'react-redux';
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
		const deck = this.props.decksReducer.get('deck');
		const { navigate } = this.props.navigation;
		navigate('DeckQuestions', {deck});
	};
	
	render() {
		const deck = this.props.decksReducer.get('deck');
		const { questions } = deck;
		const questionsCount = questions.length;
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
						style={{...styles.regularBtn, ...styles.startQuizBtn}}>
						<Text style={styles.startQuizBtn}>Start Quiz</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({ decksReducer }) => ({ decksReducer });

export default connect(mapStateToProps)(Deck);
