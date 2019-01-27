import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../utils/styles';
import Question from './Question';
import {View, Text, TouchableOpacity} from 'react-native';

const initialState = {
	correct: 0,
	incorrect: 0,
	currentQuestion: 0,
	quizCompleted: false,
};

class DeckQuestions extends Component {
	static navigationOptions = ({navigation}) => ({
		title: `Quiz: ${navigation.state.params.deck.title}`
	});
	
	state = {...initialState};
	
	onSubmit = answer => {
		this.setState(prevState => ({
			...prevState,
			[answer]: prevState[answer] + 1,
			currentQuestion: prevState.currentQuestion + 1,
			quizCompleted: prevState.currentQuestion + 1 === this.props.navigation.state.params.deck.questions.length
		}));
	};
	
	render() {
		if (this.state.quizCompleted) {
			const {deck} = this.props.navigation.state.params;
			const totalQuestions = deck.questions.length;
			const {correct, incorrect} = this.state;
			return (
				<View style={styles.container}>
					<Text style={styles.heading}>Quiz Completed</Text>
					<Text style={styles.incorrect}>
						{incorrect} answer(s) were incorrect.({((incorrect / totalQuestions) * 100).toFixed(2)}%)
					</Text>
					<Text style={styles.correct}>
						{correct} answer(s) were correct.({((correct / totalQuestions) * 100).toFixed(2)}%)
					</Text>
					<Text style={styles.total}>{totalQuestions} Total questions.</Text>
					<View style={styles.actions}>
						<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
							<Text style={styles.actionsBtn}>Go Back!</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.setState({...initialState})}>
							<Text style={styles.actionsBtn}>Restart Quiz</Text>
						</TouchableOpacity>
					</View>
				</View>
			);
		}
		const {questions} = this.props.navigation.state.params.deck;
		return (
			<Question
				questions={questions}
				currentQuestion={this.state.currentQuestion}
				onSubmit={this.onSubmit}
			/>
		);
	}
}

const mapStateToProps = ({decksReducer}) => ({decksReducer});

export default connect(mapStateToProps)(DeckQuestions);
