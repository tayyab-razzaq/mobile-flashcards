import { StyleSheet } from 'react-native';

const white = '#FFF';
const black = '#000';
const lightGrey = '#C6C6C6';
export const red = '#BA0F0F';
export const green = '#0A7203';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		textAlign: 'center'
	},
	centerText: {
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	deckTitle: {
		paddingTop: 20,
		fontSize: 24,
	},
	questionsCount: {
		color: lightGrey,
		marginTop: 10,
		marginBottom: 20,
		textAlign: 'center'
	},
	deckHolder: {
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: lightGrey,
		backgroundColor: white,
		textAlign: 'center',
		borderWidth: 0.5,
		padding: 10,
	},
	regularBtn: {
		alignItems: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: black,
		padding: 20,
		marginLeft: 50,
		marginRight: 50,
		marginTop: 10
	},
	addCardBtn: {
		backgroundColor: white,
		color: black
	},
	startQuizBtn: {
		backgroundColor: black,
		color: white
	},
	inputField: {
		padding: 10,
		marginBottom: 20,
		fontSize: 20,
		height: 50,
		borderWidth: 1,
		marginRight: 30,
		marginLeft: 30,
		borderRadius: 10,
	},
	submitBtn: {
		flex: 1,
		alignItems: 'center',
		borderColor: black,
		borderRadius: 5,
		borderWidth: 1,
		padding: 20,
		marginBottom: 10,
		marginLeft: 40,
		marginRight: 40
	},
	inverseSubmitBtn: {
		alignItems: 'center',
		borderRadius: 5,
		padding: 10,
		marginBottom: 10,
		marginLeft: 40,
		marginRight: 40,
		backgroundColor: black,
		color: white
	},
	regularSubmitBtn: {
		backgroundColor: black,
		color: white,
	},
	correctBtn: {
		backgroundColor: green,
		color: white
	},
	incorrectBtn: {
		backgroundColor: red,
		color: white,
	},
	quizCompleted: {
		fontSize: 24,
		fontWeight: 'bold',
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
		marginBottom: 10,
		color: black,
	},
	quizDetail: {
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		margin: 10,
		padding: 10
	},
	quizSummary: {
		marginTop: 20,
		fontWeight: 'bold',
		fontSize: 16,
		color: lightGrey
	},
	cardNumber: {
		fontSize: 16,
		color: black,
		alignSelf: 'flex-start'
	},
	flipCard: {
		backgroundColor: lightGrey,
		alignItems: 'center',
		justifyContent: 'center',
		backfaceVisibility: 'hidden',
		padding: 30,
		marginTop: 20
	},
	content: {
		fontSize: 20,
		color: black,
		fontWeight: 'bold',
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	flipCardBack: {
		backgroundColor: white,
		position: 'absolute',
		top: 0
	},
	switchBtn: {
		fontSize: 16,
		color: lightGrey,
		fontWeight: 'bold',
		marginTop: 20,
		marginBottom: 30,
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	disabledClass: {
		backgroundColor: lightGrey,
		color: white
	}
});

export default styles;