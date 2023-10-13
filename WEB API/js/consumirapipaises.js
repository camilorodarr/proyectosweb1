/* COMENTARIO 2
console.log(paises[0].name.common);
console.log(paises[0].name.nativeName.spa.official);
console.log(paises[1].name.common);
for (const pais of paises) {
console.log(pais.name.common);            
}*/
//crearListaPaises(paises);
//adicionarDatosTablaPaises(paises)

var respuestaPaisesAPI;

function poblarDatosPaises() {
    var url = 'https://restcountries.com/v3.1/independent?status=true';
    /*fetch sirve para recuperar un valor*/
    /*then hace referencia a entonces, en este caso luego de recuperar la url con fetch entonces se pasa a un .json*/
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(paises => {
            respuestaPaisesAPI = paises;
            //comentario 2
            adicionarDatosTablaPaises(paises);
            agregarElementosSelect(paises);

        });

    function adicionarDatosTablaPaisesDos(paises) {
        var tabla = document.getElementById("tablaPaisesDos");
        for (const pais of paises) {
            var fila = tabla.insertRow(-1);
            var columnaNombre = tabla.insertCell(0);
            var columnaCapitales = tabla.insertCell(1);
            var columnaMoneda = tabla.insertCell(2);
            var columnaBanderas = tabla.insertCell(3);
            var columnaPoblacion = tabla.insertCell(4);

            columnaNombre.innerHTML = pais.name.official;
            columnaCapitales.innerHTML = pais.capital[0];
            columnaMoneda.innerHTML = pais.currencies;
            columnaBanderas.innerHTML = pais.flags;
            columnaPoblacion.innerHTML = pais.population;
        }
    }








    function adicionarDatosTablaPaises(paises) {
        var tabla = document.getElementById("tablaPaises")
        for (const pais of paises) {
            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaCapital = fila.insertCell(1);
            var columnaRegion = fila.insertCell(2);

            columnaNombre.innerHTML = pais.name.official;
            columnaCapital.innerHTML = pais.capital[0];
            columnaRegion.innerHTML = pais.region;
        }
    }

    function crearListaPaises(paises) {
        var ul = crearNodo('ul');
        for (const pais of paises) {
            var li = crearNodoTexto('li', pais.name.common);
            adicionarNodoContenedor(ul, li);
        }
        adicionarNodoBody(ul);
    }

}

function agregarElementosSelect(paises) {
    var selectPaises = document.getElementById("selectPaises");

    for (const pais of paises) {
        var option = crearNodoTexto('option', pais.name.official);
        adicionarNodoContenedor(selectPaises, option);
    }
}

function mostrarDatosPaisSeleccionado(paisBuscar) {
    var tabla = document.getElementById("tablaPaises");
    tabla.remove(tabla.);

    for (const pais of respuestaPaisesAPI) {
        if (paisBuscar = pais.name.official) {
            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaCapital = fila.insertCell(1);
            var columnaRegion = fila.insertCell(2);

            columnaNombre.innerHTML = pais.name.official;
            columnaCapital.innerHTML = pais.capital[0];
            columnaRegion.innerHTML = pais.region;
        }
    }
}