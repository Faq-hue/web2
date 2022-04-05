var vector = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var turn = true;

function put(id) {
  
  var tk= document.getElementById(id);

  if (table()) {
    return;
  }

  if (vector[id] != 0) {
    alert("Box already taken");
    return;
  }

  if (turn) {
    document.getElementById("player").setAttribute("style", "color: red");
    document.getElementById("player").innerHTML = "Player 2";
    tk.setAttribute("style", "color: blue");
    document.getElementById(id).innerHTML = "O";
    turn = false;
    vector[id] = 1;
    console.log("O");
  } else {
    document.getElementById("player").setAttribute("style", "color: blue")
    document.getElementById("player").innerHTML = "Player 1";
    tk.setAttribute("style", "color: red");
    document.getElementById(id).innerHTML = "X";
    turn = true;
    vector[id] = 2;
    console.log("X");
  }

}

function zero() {

  for (var i = 0; i < 9; i++) {
    document.getElementById(i).innerHTML = "";
  }

  document.getElementById("player").setAttribute("style", "color: blue");
  document.getElementById("player").innerHTML = "Player 1";

  vector = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function table() {
  //player 1 wins
  //horizontal
  if (vector[0] == 1 && vector[1] == 1 && vector[2] == 1) {
    alert("The player 1 wins");
    return true;
  }

  if (vector[3] == 1 && vector[4] == 1 && vector[5] == 1) {
    alert("The player 1 wins");
    return true;
  }

  if (vector[6] == 1 && vector[7] == 1 && vector[8] == 1) {
    alert("The player 1 wins");
    return true;
  }

  //vertical
  if (vector[0] == 1 && vector[3] == 1 && vector[6] == 1) {
    alert("The player 1 wins");
    return true;
  }

  if (vector[1] == 1 && vector[4] == 1 && vector[7] == 1) {
    alert("The player 1 wins");
    return true;
  }

  if (vector[3] == 1 && vector[5] == 1 && vector[8] == 1) {
    alert("The player 1 wins");
    return true;
  }

  //diagonal
  if (vector[0] == 1 && vector[4] == 1 && vector[8] == 1) {
    alert("The player 1 wins");
    return true;
  }

  if (vector[2] == 1 && vector[4] == 1 && vector[6] == 1) {
    alert("The player 1 wins");
    return true;
  }

  //player 2 wins
  //horizontal
  if (vector[0] == 2 && vector[1] == 2 && vector[2] == 2) {
    alert("The player 2 wins");
    return true;
  }

  if (vector[3] == 2 && vector[4] == 2 && vector[5] == 2) {
    alert("The player 2 wins");
    return true;
  }

  if (vector[6] == 2 && vector[7] == 2 && vector[8] == 2) {
    alert("The player 2 wins");
    return true;
  }

  //vertical
  if (vector[0] == 2 && vector[3] == 2 && vector[6] == 2) {
    alert("The player 2 wins");
    return true;
  }

  if (vector[1] == 2 && vector[4] == 2 && vector[7] == 2) {
    alert("The player 2 wins");
    return true;
  }

  if (vector[3] == 2 && vector[5] == 2 && vector[8] == 2) {
    alert("The player 2 wins");
    return true;
  }

  //diagonal
  if (vector[0] == 2 && vector[4] == 2 && vector[8] == 2) {
    alert("The player 2 wins");
    return true;
  }

  if (vector[2] == 2 && vector[4] == 2 && vector[6] == 2) {
    alert("The player 2 wins");
    return true;
  }
}
