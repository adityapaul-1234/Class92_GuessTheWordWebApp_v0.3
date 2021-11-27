var player1 = localStorage.getItem("User1");
var player2 = localStorage.getItem("User2");
var score1 = 0;
var score2 = 0;
var qt = "player1";
var at = "player2";

document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
document.getElementById("player_question").innerHTML = "Question Turn: " + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    new_word = get_word.toLowerCase();
    len = word.length;
    for(var i=1; i<len;){
        temp = word.charAt(i);
        word = word.replace(temp, "_");
        i = i + 2;
    }
    console.log(word);

    question_word = "<h4> Your word to guess in lowercase is: " + word + "</h4>";
    input_box = "<input class='form-control' placeholder='Enter your answer here' id='answer'>";
    check_button = "<br><button type='button' class='btn btn-info' id='check' onclick='check()'>Check</button>"; 
    info = "<br><label id='info'></label>";
    row = question_word + input_box + info + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function check(){
    g_answer = document.getElementById("answer").value;
    answer = g_answer.toLowerCase();
    console.log("Check");
    console.log(answer);
    console.log(word);

    if (answer == new_word){
        console.log("match");
        if (at == "player1"){
            score1 = score1 + 1;
            document.getElementById("player1_score").innerHTML = player1 + ": " + score1;
            console.log("Score1");
            document.getElementById("answer").value = " ";
            document.getElementById("info").innerHTML = " ";
        }
        else {
            score2 = score2 + 1;
            document.getElementById("player2_score").innerHTML = player2 + ": " + score2;
            console.log("Score2");
            document.getElementById("answer").value = " ";
            document.getElementById("info").innerHTML = " ";
        }
    }
    else {
        document.getElementById("answer").value = " ";
        document.getElementById("info").innerHTML = "Oops! Wrong answer, try next time.";
    }

    if (qt == "player1"){
        qt = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player2;
    }
    else {
        qt = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player1;
    }

    if (at == "player1"){
        at = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2;
    }

    else {
        at = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player1;
    }
}