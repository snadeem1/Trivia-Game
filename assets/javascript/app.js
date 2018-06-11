$(document).ready(function() {
var game = $("#game");
var count = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;




var questions = ["Clouds are caused by what?", 
                "In cricket what is an ODI?",
                "In which year of First World War Germany declared war on Russia and France?"]

var choices = [["Evaporation","Water vapour condensing","Melting ice crystals","Transpiration"],
               ["Off Drive Initiative", "One Day Innings", "One Day International", "Over Delivered Illegally"]
               ["1914","1915", "1916", "1917"]]
                
var answers = ["Water vapour condensing", "One Day International","1914"]
	
	

for ( var i = 0; i < questions.length; i++){
    $("#question").html(questions[i]);
    setInterval(function() {
    $("#timesUp").html("Time Out")
      }, 30000);
      
      }

for ( var x = 0; x < choices.length; x++){

}

});