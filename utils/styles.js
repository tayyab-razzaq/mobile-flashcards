import { StyleSheet } from 'react-native';
import {WHITE_COLOR, GREY_COLOR, BLACK_COLOR, GREEN_COLOR, RED_COLOR} from '../common/constants';

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
		color: GREY_COLOR,
		marginTop: 10,
		marginBottom: 20,
		textAlign: 'center'
	},
	deckHolder: {
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: GREY_COLOR,
		backgroundColor: WHITE_COLOR,
		textAlign: 'center',
		borderWidth: 0.5,
		padding: 10,
	},
	regularBtn: {
		alignItems: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: BLACK_COLOR,
		padding: 20,
		marginLeft: 50,
		marginRight: 50,
		marginTop: 10
	},
	addCardBtn: {
		backgroundColor: WHITE_COLOR,
		color: BLACK_COLOR
	},
	startQuizBtn: {
		backgroundColor: BLACK_COLOR,
		color: WHITE_COLOR
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
		borderColor: BLACK_COLOR,
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
		backgroundColor: BLACK_COLOR,
		color: WHITE_COLOR
	},
	regularSubmitBtn: {
		backgroundColor: BLACK_COLOR,
		color: WHITE_COLOR,
	},
	correctBtn: {
		backgroundColor: GREEN_COLOR,
		color: WHITE_COLOR
	},
	incorrectBtn: {
		backgroundColor: RED_COLOR,
		color: WHITE_COLOR,
	},
	quizCompleted: {
		fontSize: 24,
		fontWeight: 'bold',
		alignItems: 'center',
		textAlign: 'center',
		justifyContent: 'center',
		marginBottom: 10,
		color: BLACK_COLOR,
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
		marginBottom: 20,
		fontWeight: 'bold',
		fontSize: 16,
		color: GREY_COLOR
	},
	cardNumber: {
		fontSize: 16,
		color: BLACK_COLOR,
		alignSelf: 'flex-start'
	},
	flippableCard: {
		alignItems: 'center',
		justifyContent: 'center',
		backfaceVisibility: 'hidden',
		padding: 30,
		marginTop: 20
	},
	flippableCardBackContent: {
		backgroundColor: WHITE_COLOR,
	},
	flippableCardContent: {
		backgroundColor: GREY_COLOR,
		flex: 1,
		position: 'absolute',
		top: 0,
		justifyContent: 'center'
	},
	deckTitleQuestion: {
		fontSize: 20,
		color: BLACK_COLOR,
		fontWeight: 'bold',
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		marginBottom: 20
	},
	content: {
		fontSize: 20,
		color: BLACK_COLOR,
		fontWeight: 'bold',
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	flipCardBtn: {
		fontSize: 16,
		fontWeight: 'bold',
		marginTop: 20,
		marginBottom: 30,
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		alignSelf: 'center'
	},
	redColor: {
		color: RED_COLOR
	},
	greenColor: {
		color: GREEN_COLOR
	},
	disabledClass: {
		backgroundColor: GREY_COLOR,
		color: WHITE_COLOR
	}
});

export default styles;