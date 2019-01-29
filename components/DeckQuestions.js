import React, {Component} from 'react';
import {connect} from 'react-redux';
import Question from './Question';
import Result from './Result';
import {dismissAllScheduledNotifications} from '../utils/notifications';
import {QUIZ_INITIAL_STATE} from '../common/constants';



class DeckQuestions extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			...QUIZ_INITIAL_STATE
		};
	}
	
	static navigationOptions = ({navigation}) => ({
		title: `Quiz: ${navigation.state.params.deck.title}`
	});
	
	onSubmit = answer => {
		this.setState(prevState => ({
			...prevState,
			[answer]: prevState[answer] + 1,
			currentQuestion: prevState.currentQuestion + 1,
			quizCompleted: prevState.currentQuestion + 1 === this.props.navigation.state.params.deck.questions.length
		}), () => {
			if(this.state.quizCompleted) {
				dismissAllScheduledNotifications();
			}
		});
	};
	
	restartQuiz = () => {
		this.setState({...QUIZ_INITIAL_STATE});
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
