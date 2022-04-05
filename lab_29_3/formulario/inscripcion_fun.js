function send() {
  var surname = document.getElementById("surname");
  var mail = document.getElementById("mail");
  var dni = document.getElementById("dni");
  var db = document.getElementById("db");
  var prog = document.getElementById("prog");
  var net = document.getElementById("net");
  var ai = document.getElementById("ai");

  if (surname.value.length < 3) {
    alert("Invalid surname, must have more than 3 letters");
    console.log("apellido menor a 3");
    surname.setAttribute("style", "background-color: red");
  }else{
    surname.setAttribute("style", "background-color: white");
  }

  if (!mail.value.includes('.') && !mail.value.includes('@')) {
    alert("Invalid email, must have one . and one @");
  }

  if (dni.value.length < 7) {
    alert("Invalid DNI, must have more than 7 numbers")
    console.log("dni menor a 7");
    dni.setAttribute("style", "background-color: red");
  }else{
    dni.setAttribute("style", "background-color: white");
  }

  if (
    db.checked == false &&
    net.checked == false &&
    prog.checked == false &&
    ai.checked == false
  ) {
    alert("Choose at least one course");
    console.log("debe elegir al menos 1");
  }

}
