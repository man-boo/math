function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    actual_answer = parse_Int(number1) * parse_Int(number2);

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "quiz_game_page.html";
}

question_turn ="player1";
answer_turn = "player2";


function check()
{
    get_answer = document.getElementById("input_check_box").value;

    if (get_answer == actual_answer);
}

    if (answer_turn == "player1")
    {
        update_player1_score = player1_score +1;
        document.getElementById("player1_score").innerHTML = update_player1_score;
    }
    else
    {
        update_player1_score = player2_score +1;
        document.getElementById("player2_score").innerHTML = update_player2_score;
    }
    