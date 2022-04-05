var objeto = document.getElementById('parrafo');

//alert('El estilo del componente ' + objeto + ' es ' + objeto.getAttribute('style'));

objeto.setAttribute('style', 'backgroud-color: green');

//alert('El estilo del componente ' + objeto + ' es ' + objeto.getAttribute('style'));

alert(objeto.innerHTML);

objeto.innerHTML = 'Chau';

alert(objeto.innerHTML);

