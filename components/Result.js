import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../utils/styles';

const Result = props => {
	const totalQuestions = props.deck.questions.length;
	const {correct, incorrect} = props;
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.heading}>Quiz Completed</Text>
				<Text style={styles.incorrectBtn}>
					{incorrect} answer(s) were incorrect.({((incorrect / totalQuestions) * 100).toFixed(2)}%)
				</Text>
				<Text style={styles.correctBtn}>
					{correct} answer(s) were correct.({((correct / totalQuestions) * 100).toFixed(2)}%)
				</Text>
				<Text style={styles.total}>{totalQuestions} Total questions.</Text>
			</View>
			<View>
				<TouchableOpacity
					onPress={() => props.navigation.goBack()} style={{...styles.regularBtn, ...styles.addCardBtn}}>
					<Text style={styles.addCardBtn}>Go Back!</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={props.restartQuiz} style={{...styles.regularBtn, ...styles.startQuizBtn}}>
					<Text style={styles.startQuizBtn}>Restart Quiz</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Result;