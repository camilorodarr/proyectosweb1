function insertar() {
    // 

    var cedula = document.getElementById("cedula");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");

    estudiante = new Estudiante(cedula.value, nombres.value, apellidos.value);

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]")
    //recupera el valor del json

    estudiantes.push(estudiante);
    //agrega un nuevo valor


    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    //convierte nuevamente en JSON

    console.log(estudiantes);
    cedula.value = "";
    nombres.value = "";
    apellidos.value = "";
    cedula.focus();

}
function consultar() {

    var cedula = document.getElementById("cedula");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]")

    encontrado = false;

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].cedula == cedula.value) {
            nombres.value = estudiantes[i].nombres
            apellidos.value = estudiantes[i].apellidos
            encontrado = true;
        }

    }

}
function modificar() {

    var cedula = document.getElementById("cedula");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]")

    encontrado = false;

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].cedula == cedula.value) {
            estudiantes[i].nombres = nombres.value
            estudiantes[i].apellidos = apellidos.value
            encontrado = true;
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
        }

    }

}
function eliminar() {

    var cedula = document.getElementById("cedula");
    var nombres = document.getElementById("nombres");
    var apellidos = document.getElementById("apellidos");

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]")

    encontrado = false;

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].cedula == cedula.value) {

            estudiantes.splice(i, i+1);
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

        }

    }

}
