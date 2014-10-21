$(document).ready(function () {

/* Array of Quiz Questions */
var triviaGame = [];

triviaGame[0] = {
	question: "What was the exhibit that Jane took Jesse to go see?",
	choices: ["Francis Bacon", "Vincent Van Gogh", "Georgia O'Keefe", "Claude Monet"],
	correct: 2,
	fact: "Jane took Jesse to see Georgia O'Keefe."
}
triviaGame[1] = {
	question: "What does Skylar initially offer to pay for the car wash?",
	choices: ["$800,000", "$779,000", "$897,000", "879,000"],
	correct: 3,
	fact: "Skylar initially offers $879,000."
}
triviaGame[2] = {
	question: "What is the name of the plant that Brock was poisoned with?",
	choices: ["Lily of the Valley", "Ricin", "Autumn Crocus", "Daphne"],
	correct: 0,
	fact: "Brock was poisoned with the Lily of the Valley plant."
}
triviaGame[3] = {
	question: "Who shoots and kills Combo?",
	choices: ["A rival gang member during a drive-by", "Walt", "A kid on a bike", "A DEA agent"],
	correct: 2,
	fact: "A kid on a bike shoots and kills Combo."
}
triviaGame[4] = {
	question: "What fake surname does Jesse give Jane when trying to rent an apartment",
	choices: ["James", "Jackson", "White", "Ventura"],
	correct: 1,
	fact: "Jesse uses the name Jesse Jackson."
}

/* Declaring global variables */
var currentQuestion = 0;
var numCorrect = 0;
var result = $("#result");

/* section to declare questions and answers */
var play = function () {
	$(".question").text(triviaGame[currentQuestion].question);
	$(".answerOne").text(triviaGame[currentQuestion].choices[0]);
	$(".answerTwo").text(triviaGame[currentQuestion].choices[1]);
	$(".answerThree").text(triviaGame[currentQuestion].choices[2]);
	$(".answerFour").text(triviaGame[currentQuestion].choices[3]);
	$("#numCorrect").text(numCorrect);
	$(".nextQuestion").hide();
}

/* checking answers */
function checkAnswer () {
	var answer = $('input[name="option"]:checked').val();
	//var correctAnswer = triviaGame[currentQuestion].correct;
	if (answer == triviaGame[currentQuestion].correct) { //not working
		result.text("You are right!");
		numCorrect++;
		$(".correctNumber").toggle();
		$("#numCorrect").text(numCorrect);
	} else {
		$(".end-result").show();
		result.text("WRONG ANSWER, BITCH!");
	}
}

play();

/* submitting answer */
$(".submit").on("click", function () {
	if (currentQuestion < 4) {
		checkAnswer();
		$("#result").show();
		$(".fact").show().text(triviaGame[currentQuestion].fact)
		currentQuestion++;
		$("#numCorrect").text(numCorrect);
		$("#q-and-a").hide();
		$(".option").attr("checked", false);
		$(".nextQuestion").show();
		$(".skipQuestion").hide();
		$(".end-result").hide();
	} else {
		checkAnswer();
		$(".fact").show().text(triviaGame[currentQuestion].fact)
		$(".end-result").text("You know how they say 'It's been a pleasure'? Well.. it hasn't..");
		$("#q-and-a").hide();
		$("#result").show();
		$(".nextQuestion").hide();
		$(".skipQuestion").hide();
	}
});

/* skipping question */
$(".skipQuestion").on("click", function () {
	$("#result").hide();
	$(".fact").hide();
	$("#q-and-a").show();
	currentQuestion++;
	play();
	$(".option").attr("checked", false);
});

/* next question after submitted answer */
$(".nextQuestion").on("click", function () {
	$("#result").hide();
	$(".fact").hide();
	$("#q-and-a").show();
	play();
	$(".option").attr("checked", false);
	$(".skipQuestion").show();
});

/* restarting game */
$(".restartGame").on("click", function () {
	currentQuestion = 0;
	numCorrect = 0;
	$("#result").hide();
	$(".fact").hide();
	$("#q-and-a").show();
	$(".correctNumber").show();
	$(".end-result").hide();
	$(".skipQuestion").show();
	$(".option").attr("checked", false);
	play();
});


});