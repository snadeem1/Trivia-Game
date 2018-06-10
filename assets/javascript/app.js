$(document).ready(function() {
var game = $("#game");
var count = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;

 
newQuestion(function(){

});

var questions = ["Clouds are caused by what?", "In cricket what is an ODI?"]
var choices = [["Evaporation","Water vapour condensing","Melting ice crystals","Transpiration"],
                ["Off Drive Initiative", "One Day Innings", "One Day International", "Over Delivered Illegally"]]
var answers = ["Water vapour condensing", "One Day International"]
	
	

for ( var i = 0; i < questions.length; i++){
    $("#question").html(questions[i]);
    setInterval(function() {
    $("#timesUp").html("Time Out")
      }, 30000);
      setInterval(function(){
        questionCounter++;
        newQuestion();
      }, 30000);
}

for ( var x = 0; x < choices.length; x++){
    
}

});