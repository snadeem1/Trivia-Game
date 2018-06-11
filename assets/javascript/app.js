$(document).ready(function() {
   
    var currentQuestion; 
    var correctAnswer; 
    var incorrectAnswer;
    var unanswered;
    var seconds;
    var time; 
    var answered; 
    var userSelect;
    var messages = {
        correct: "YAY! You got it right",
        incorrect: "Ooops! That's wrong",
        endTime: "Out of time!",
        finished: "Time to see the Results"
    }
    
    
    var triviaQuestions = [{
        question: "All Life begins with a single _____________",
        answerList: ["tissue", "cell", "microbe", "organ"],
        answer: 1
    },{
        question: "Skin, ears, and kidneys are examples of _____________",
        answerList: ["cells", "organ systems", "organs", "tissues"],
        answer: 2
    },{
        question: "One important function of bones is to produce  _____________",
        answerList: ["blood cells", "tendons", "cartilage", "ligaments"],
        answer: 0
    },{
        question: "Digestion begins in the   _____________",
        answerList: ["large intestine", "small intestine", "mouth", "stomach"],
        answer: 2
    },{
        question: "The human heart has _____________ chambers (rooms).",
        answerList: ["Five", "Four", "Two", "Three"],
        answer: 1
    },{
        question: "The main organ in the respiratory system is the _____________.",
        answerList: ["Trachea", "Diaphragm", "Lung", "Bronchi"],
        answer: 2
    },{
        question: " The central nervous system includes:",
        answerList: ["Spinal Cord", "Brain & Spinal Cord", "Nerves", "Brain"],
        answer: 1
    },{
        question: "What is the term which describes the joining together of a sperm and an egg?",
        answerList: ["Fertilization", "Ovulation", "Reproduction", "Duplication"],
        answer: 0
    },{
        question: "The primary function of the system is to support and protect the body",
        answerList: ["Digestive", "Muscular", "Skeletal", "Respiratory"],
        answer: 2
    },{
        question: "The primary function of this system is to break down food into usable form and to remove waste products",
        answerList: ["Muscular", "Respiratory","Skeletal", "Digestive"],
        answer: 3
    }];

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10'];


$('#startBtn').on('click', function(){
    $(this).hide();
    $("#title").hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}
function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}
function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	$('#gif').html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 2000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 2000);
	}	
}
function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
}
});