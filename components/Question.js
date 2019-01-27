import React, {Component} from 'react';
import styles from '../utils/styles';
import {View, Text, TouchableOpacity, Animated} from 'react-native';


const initialState = {
	questionCardFace: true
};

class Question extends Component {
	
	state = {...initialState};
	
	componentDidMount() {
		this.animatedValue = new Animated.Value(0);
		this.value = 0;
		this.animatedValue.addListener(({value}) => {
			this.value = value;
		});
		this.frontInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['0deg', '180deg'],
		});
		this.backInterpolate = this.animatedValue.interpolate({
			inputRange: [0, 180],
			outputRange: ['180deg', '360deg'],
		});
		this.frontOpacity = this.animatedValue.interpolate({
			inputRange: [89, 90],
			outputRange: [1, 0],
		});
		
		this.backOpacity = this.animatedValue.interpolate({
			inputRange: [89, 90],
			outputRange: [0, 1],
		});
	}
	
	flipCard = () => {
		this.setState(prevState => ({questionCardFace: !prevState.questionCardFace}));
		return Animated.spring(
			this.animatedValue,
			{
				toValue: this.value >= 90 ? 0 : 180,
				friction: 8,
				tension: 10
			}
		).start();
	};
	
	
	render() {
		
		const {questions} = this.props;
		const frontAnimatedStyle = {
			transform: [{rotateY: this.frontInterpolate}],
		};
		const backAnimatedStyle = {
			transform: [{rotateY: this.backInterpolate}],
		};
		return (
			<View style={styles.container}>
				<Text style={styles.cardNumber}>
					{this.props.currentQuestion + 1} / {questions.length}
				</Text>
				
				<View>
					<Animated.View
						style={[
							styles.flipCard,
							frontAnimatedStyle,
							{opacity: this.frontOpacity},
						]}>
						<Text style={styles.content}>
							Question: {questions[this.props.currentQuestion].question}
						</Text>
					</Animated.View>
					
					<Animated.View
						style={[
							backAnimatedStyle,
							styles.flipCard,
							styles.flipCardBack,
							{opacity: this.backOpacity},
						]}>
						<Text style={styles.content}>
							Answer: {questions[this.props.currentQuestion].answer}
						</Text>
					</Animated.View>
				</View>
				<TouchableOpacity onPress={() => this.flipCard()}>
					<Text style={styles.switchBtn}>
						{this.state.questionCardFace ? 'View Answer' : 'View Question'}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.onSubmit('correct')}>
					<Text style={styles.correctBtn}>Correct</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.onSubmit('incorrect')}>
					<Text style={styles.incorrectBtn}>In Correct</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Question;
