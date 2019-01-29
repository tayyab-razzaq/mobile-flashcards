import React, {Component} from 'react';
import styles from '../utils/styles';
import {View, Text, TouchableOpacity, Animated} from 'react-native';

class Question extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showQuestion: true,
			changed: false,
		};
		this.animatedValue = new Animated.Value(0);
		this.value = 0;
		this.animatedValue.addListener(({value}) => {
			this.value = value;
		});
	}
	
	componentDidMount() {
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
		this.setState(prevState => ({
			showQuestion: !prevState.showQuestion,
			changed: true,
		}));
		if (this.value >= 90) {
			Animated.spring(this.animatedValue, {toValue: 0, friction: 8, tension: 10}).start();
		}
		else {
			Animated.spring(this.animatedValue, {toValue: 180, friction: 8, tension: 10}).start();
		}
	};
	
	onSubmit = property => {
		this.setState({showQuestion: true, changed: false}, () =>
			this.props.onSubmit(property)
		);
	};
	
	render() {
		const {questions, currentQuestion} = this.props;
		const frontAnimatedStyle = {transform: [{rotateY: this.frontInterpolate}]};
		const backAnimatedStyle = {transform: [{rotateY: this.backInterpolate}]};
		
		const showBackStyle = this.state.changed ? {} : {display: 'none'};
		
		return (
			<View style={styles.container}>
				<Text style={styles.cardNumber}>
					{currentQuestion + 1} / {questions.length}
				</Text>
				
				<View style={styles.container}>
					
					<Animated.View
						style={{
							...styles.flippableCard,
							...frontAnimatedStyle,
							...{opacity: this.frontOpacity},
						}}>
						<View style={styles.flippableCardContent}>
							<Text style={styles.content}>Question</Text>
							<Text style={styles.content}>
								{questions[currentQuestion].question}
							</Text>
						</View>
					</Animated.View>
					<Animated.View
						style={{
							...backAnimatedStyle,
							...styles.flippableCard,
							...styles.flippableCardBack,
							...{opacity: this.backOpacity},
						}}>
						<View style={{...styles.flippableCardContent, ...showBackStyle}}>
							<Text style={styles.content}>Answer</Text>
							<Text style={styles.content}>
								{questions[currentQuestion].answer}
							</Text>
						</View>
					</Animated.View>
					<TouchableOpacity onPress={this.flipCard}>
						{
							this.state.showQuestion ?
								<Text style={{...styles.flipCardBtn, ...styles.greenColor}}>View Answer</Text>
								:
								<Text style={{...styles.flipCardBtn, ...styles.redColor}}>View Question</Text>
						}
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => this.onSubmit('correct')}
						style={{...styles.regularBtn, ...styles.correctBtn}}>
						<Text style={styles.correctBtn}>Correct</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => this.onSubmit('incorrect')}
						style={{...styles.regularBtn, ...styles.incorrectBtn}}>
						<Text style={styles.incorrectBtn}>In Correct</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default Question;
