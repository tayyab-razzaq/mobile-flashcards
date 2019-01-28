import React, {Component} from 'react';
import {connect} from 'react-redux';
import Question from './Question';
import Result from './Result';

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
	
	restartQuiz = () => {
		this.setState({...initialState});
	};
	
	render() {
		if (this.state.quizCompleted) {
			const {deck} = this.props.navigation.state.params;
			return (
				<Result
					deck={deck}
					correct={this.state.correct}
					incorrect={this.state.incorrect}
					navigation={this.props.navigation}
					restartQuiz={this.restartQuiz}
				/>
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
