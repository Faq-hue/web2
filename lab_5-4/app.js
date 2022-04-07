var arr = {
  codigo: "",
  desc: "",
  mar: "",
  precio: 0.0,
  cantidad: 0,
  iva: 0.0,
  subt: 0.0,
};

var cont = [];

function get() {
  var vec = document.getElementsByName("in");

  //console.log("a: " + vec[0].value);
  calculate(vec);
  draw();
}

function calculate(vec) {
  arr.codigo = vec[0].value;
  arr.desc = vec[1].value;
  arr.mar = vec[2].value;
  arr.precio = vec[3].value;
  arr.cantidad = vec[4].value;
  arr.iva = vec[5].value;
  arr.subt = arr.precio * arr.cantidad + arr.precio * arr.cantidad * arr.iva;

  cont.push(arr);

  console.log(cont.length);
  //console.log(arr);
}

function draw() {
  var res = document.getElementById("result");

  for (var i = 0; i < cont.length; i++) {
    res.innerHTML +=
      "<tr><td>" +
      cont[i].codigo +
      "</td><td>" +
      cont[i].desc +
      "</td><td>" +
      cont[i].mar +
      "</td><td>" +
      cont[i].precio +
      "</td><td>" +
      cont[i].cantidad +
      "</td><td>" +
      cont[i].iva +
      "</td><td>" +
      cont[i].subt +
      "</td><td>Acciones</td></tr>";
  }
}
