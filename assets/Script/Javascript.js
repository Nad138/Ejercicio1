 function datos(){
  var nombre = document.getElementById('nombre').value;
  var apellidos = document.getElementById('apellidos').value;
  var dni = document.getElementById('dni').value;
  var direccion = document.getElementById('direccion').value;
  document.getElementById('nameIs').innerHTML = nombre;
  document.getElementById('fullName').innerHTML = apellidos;
  document.getElementById('DNI').innerHTML = dni;
  document.getElementById('domicilio').innerHTML = direccion;
}
