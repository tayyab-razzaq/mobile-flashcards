import React, { Component } from 'react';
import styles from '../utils/styles';
import { View, Text, TouchableOpacity} from 'react-native';
import FlipCard from 'react-native-flip-card';

class Question extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showQuestion: true
		};
	}
	
	flipCard = () => {
		this.setState(prevState => ({showQuestion: !prevState.showQuestion}));
	};
	
	onSubmit = property => {
		this.setState({ showQuestion: true, changed: false }, () =>
			this.props.onSubmit(property)
		);
	};
	
	render() {
		const { questions, currentQuestion } = this.props;
		const contentColor = this.state.showQuestion ? styles.flippableCardContent : styles.flippableCardBackContent;
		return (
			<View style={styles.container}>
				<View style={{ flex: 2 }}>
					<Text style={{ ...styles.cardNumber, flex: 1 }}>
						Question {currentQuestion + 1} / {questions.length}
					</Text>
					<View style={{ flex: 3}}>
						<FlipCard
							style={{...styles.flippableCard, ...contentColor}}
							friction={8}
							perspective={1000}
							flipHorizontal
							flipVertical={false}
							flip={!this.state.showQuestion}
							clickable={false}>
							<View>
								<Text style={{...styles.content, marginBottom: 20}}>Question</Text>
								<Text style={styles.content}>
									{questions[currentQuestion].question}
								</Text>
							</View>
							<View>
								<Text style={{...styles.content, marginBottom: 20}}>Answer</Text>
								<Text style={styles.content}>
									{questions[currentQuestion].answer}
								</Text>
							</View>
						</FlipCard>
					</View>
					<View style={{ flex: 1 }}>
						<TouchableOpacity onPress={this.flipCard}>
							{this.state.showQuestion ? (
								<Text style={{ ...styles.flipCardBtn, ...styles.greenColor }}>
									View Answer
								</Text>
							) : (
								<Text style={{ ...styles.flipCardBtn, ...styles.redColor }}>
									View Question
								</Text>
							)}
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ flex: 1 }}>
					<TouchableOpacity
						onPress={() => this.onSubmit('correct')}
						style={{ ...styles.regularBtn, ...styles.correctBtn }}>
						<Text style={styles.correctBtn}>Correct</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => this.onSubmit('incorrect')}
						style={{ ...styles.regularBtn, ...styles.incorrectBtn }}>
						<Text style={styles.incorrectBtn}>In Correct</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default Question;
