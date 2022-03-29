var total = 0,
  x = 0,
  y = 0,
  op = "";

function view(t) {

  if (t == 'CE') {
    clear();
    return;
  }

  var box = document.getElementById("box");

  box.value += t;
}

function operate() {
  y = Number(box.value);

  switch (op) {
    case "+":
      total = x + y;
      break;

    case "-":
      total = x - y;
      break;

    case "*":
      total = x * y;
      break;

    case "/":
      if (y == 0) {
        console.log("Cannot operate");
      }
      total = x / y;
      break;
  }
  op = "";
  x = 0;
  y = 0;
  box.value = total;
}

function work(o) {
  x = Number(box.value);

  switch (o) {
    case "+":
      op = o;
      break;

    case "-":
      op = o;
      break;

    case "*":
      op = o;
      break;

    case "/":
      op = o;
      break;

    default:
      break;
  }
  box.value = "";
}

function clear() {
  op = "";
  x = 0;
  y = 0;
  total = 0;
  box.value = "";
}
