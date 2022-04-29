var account = { name: "", email: "", password: "", type: "" };
var list = localStorage.getItem("user");
/*
standar = 2
avanced = 1
admin = 0
*/

function set() {
  if (typeof Storage == "undefined") {
    return -1;
  }

  account.name = document.getElementById("userName");
  account.email = document.getElementById("email");
  account.password = document.getElementById("password");
  account.type = "2";

  console.log(localStorage.getItem("users"));

  for (let i = 0; i < list.length; i++) {
    if (list[i].name === account.name) {
      alert("This user already exists");
      return -2;
    }
  }

  if (localStorage.getItem(account.email) == account.email) {
    alert("This email is already registered");
    return -3;
  }

  verification();

  localStorage.setItem("users", account);
}

function verification() {
  if (document.getElementById("userName") == null) {
    alert("Insert User");
  }

  if (document.getElementById("email") == "") {
    alert("Insert email");
  }

  if (document.getElementById("password") == "") {
    alert("Insert password");
  }
}
