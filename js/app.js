$(document).ready(function () {

/* Array of Quiz Questions */
var triviaGame = [{
	question: "What was the exhibit that Jane took Jesse to go see?",
	choices: ["Francis Bacon", "Vincent Van Gogh", "Georgia O'Keefe", "Claude Monet"],
	correct: 2,
	fact: "Jane took Jesse to see Georgia O'Keefe."
	},
	{
	question: "What does Skylar initially offer to pay for the car wash?",
	choices: ["$800,000", "$779,000", "$897,000", "$879,000"],
	correct: 3,
	fact: "Skylar initially offers $879,000."
	},
	{
	question: "What is the name of the plant that Brock was poisoned with?",
	choices: ["Lily of the Valley", "Ricin", "Autumn Crocus", "Daphne"],
	correct: 0,
	fact: "Brock was poisoned with the Lily of the Valley plant."
	},
	{
	question: "Who shoots and kills Combo?",
	choices: ["A rival gang member during a drive-by", "Walt", "A kid on a bike", "A DEA agent"],
	correct: 2,
	fact: "A kid on a bike shoots and kills Combo."
	},
	{
	question: "What fake surname does Jesse give Jane when trying to rent an apartment",
	choices: ["James", "Jackson", "White", "Ventura"],
	correct: 1,
	fact: "Jesse uses the name Jesse Jackson."
	}];

/* Declaring global variables */
var currentQuestion = 0;
var numCorrect = 0;
var result = $("#result");

/* section to declare questions and answers */
var play = function () {
	$(".question").text(triviaGame[currentQuestion].question);
	$(".optionOne").text(triviaGame[currentQuestion].choices[0]);
	$(".optionTwo").text(triviaGame[currentQuestion].choices[1]);
	$(".optionThree").text(triviaGame[currentQuestion].choices[2]);
	$(".optionFour").text(triviaGame[currentQuestion].choices[3]);
	$("#numCorrect").text(numCorrect);
	$(".nextQuestion").hide();
}

/* checking answers */
function checkAnswer () {
	var answer = $("input[type='radio']:checked").val();
	var correctAnswer = triviaGame[currentQuestion].correct;
	if (answer == correctAnswer) { //not working
		result.text("Yeah, Bitch!");
		numCorrect++;
		$("#numCorrect").text(numCorrect);
		$(".end-result").show();
	} else {
		$(".end-result").show(); //don't think this is necessary
		result.text("WRONG ANSWER, BITCH!");
	}
}

play();

/* submitting answer */
$(".submit").on("click", function () {
	if (currentQuestion < 4) {
		checkAnswer();
		$("#result").show();
		$(".fact").show().text(triviaGame[currentQuestion].fact);
		currentQuestion++;
		$("#numCorrect").text(numCorrect);
		$("#q-and-a").hide();
		$(".nextQuestion").show();
		$(".skipQuestion").hide();
		$(".end-result").hide();
	} else {
		checkAnswer();
		$(".fact").show().text(triviaGame[currentQuestion].fact)
		$(".end-result").text("You know how they say 'It's been a pleasure'? Well.. it hasn't...");
		$("#result").show();
		$("#q-and-a").hide();
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


/* changes opacity of buttons when hovering over */
$(".restartGame").mouseenter(function () {
	$(".restartGame").css("opacity", .9 );
});

$(".restartGame").mouseleave(function () {
	$(".restartGame").css("opacity", .7 );
});

$(".submit").mouseenter(function () {
	$(".submit").css("opacity", .9 );
});

$(".submit").mouseleave(function () {
	$(".submit").css("opacity", .7 );
});

$(".skipQuestion").mouseenter(function () {
	$(".skipQuestion").css("opacity", .9 );
});

$(".skipQuestion").mouseleave(function () {
	$(".skipQuestion").css("opacity", .7 );
});

$(".nextQuestion").mouseenter(function () {
	$(".nextQuestion").css("opacity", .9 );
});

$(".nextQuestion").mouseleave(function () {
	$(".nextQuestion").css("opacity", .7 );
});

});