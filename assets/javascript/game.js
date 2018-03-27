$(document).ready(function(){
  var firstClick=true;
  var gameStart=false;
  var timerCount;
  var timerEnd;
  var timeLeft=10;
  var correct=0;
  var inCorrect=0;
  var result;
  var questionnum=3;
  //starting game on button click
  $("#start").click(function(event) {
    if(firstClick=true){
      firstClick=false;
    }
    gameStart=true;
    //countdown
    timerCount=setInterval(countDown, 1000);
    timerEnd=setTimeout(results, 10000);

    $("this").prop("disabled",true);
    $("#start").prop("disabled",true);
    remainingTime=timeLeft;
    correct=0;
    inCorrect=0;
    $("#timeRemain").html(remainingTime+ " seconds");
    resetQuestions();
  });
  //set questions to initial "unchecked" value
  function resetQuestions(){
    $("input#qa").prop("checked",false);
    $("input#qb").prop("checked",false);
    $("input#qc").prop("checked",false);
    $("input#qd").prop("checked",false);
    $("input#qe").prop("checked",false);
    $("input#qf").prop("checked",false);
    $("input#qg").prop("checked",false);
    $("input#qh").prop("checked",false);
    $("input#qi").prop("checked",false);
  }
  //results tally. note user must get all three right to win
  function results(){
    gameStart=false;
    correct=0;
    //checking if selected answer is correct
    var yes1=$("input#qb").prop("checked");
    var yes2=$("input#qf").prop("checked");
    var yes3=$("input#qg").prop("checked");
    //increase correct total with correct answer
    if(yes1===true){
      correct++;
    }
    if(yes2===true){
      correct++;
    }
    if(yes3===true){
      correct++;
    }
    if (correct===3){
      $("#timeRemain").html("<h1>Right. Off you go.</h1>");
    }
    else{
      $("#timeRemain").html("<h1>Auuuuuuuugh!</h1>"+"YOU ONlY GOT "+correct+" CORRECT!");
    }
    correct=0;
    clearTimeout(timerEnd);
    clearInterval(timerCount);
    $("#start").prop("disabled",false);
  }
  //countdown function, displaying time left
  function countDown(){
    if (gameStart=true){
      remainingTime--;
        $("#timeRemain").html(remainingTime + " seconds");
    if (remainingTime<=0){
        gameStart=false;
    }
    }
  }
});