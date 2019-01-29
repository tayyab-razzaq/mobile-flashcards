import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../utils/styles';

const Result = props => {
	const totalQuestions = props.deck.questions.length;
	const {correct, incorrect} = props;
	const correctPercentage = ((correct / totalQuestions) * 100).toFixed(2);
	const incorrectPercentage = ((incorrect / totalQuestions) * 100).toFixed(2);
	return (
		<View style={styles.container}>
			<View style={styles.container}>
				<Text style={{...styles.quizCompleted}}>Quiz Completed</Text>
				<Text style={{...styles.quizSummary, ...styles.quizDetail}}>{totalQuestions} Total questions.</Text>
				<Text style={{...styles.correctBtn, ...styles.quizDetail}}>
					{correct} answer(s) were correct.({correctPercentage}%)
				</Text>
				<Text style={{...styles.incorrectBtn, ...styles.quizDetail}}>
					{incorrect} answer(s) were incorrect.({incorrectPercentage}%)
				</Text>
			</View>
			<View style={styles.container}>
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