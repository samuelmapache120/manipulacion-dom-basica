var form = document.getElementById("myForm");
var input = document.getElementById("myInput");
var btn = document.getElementById("myBtn");

btn.addEventLIstener("click", function (event) {
    event.preventDefault();
    if (input.value === "") {
        alert("Por favor ingrese un valor en el input")
    } else {
        alert("Formulario enviado con el valor " + input.value)
    }
})

