window.onload = paginaCargada;

function paginaCargada()
{
    // Evento que captura el envio del formulario
    var boton = document.getElementById("envioDato");
    boton.onclick = validarFormulario;
};

// Función para validar el formulario.
function validarFormulario()
{
    var nombre = document.getElementById("nombre");
    if(nombre.value == "")
    {
      alert("El nombre y apellido es un campo obligatorio");
    }

    var nombre = document.getElementById("email");
    if(email.value == "")
    {
      alert("El email es un campo obligatorio");
    }

    var nombre = document.getElementById("telefono");
    if(telefono.value == "")
    {
      alert("El teléfono es un campo obligatorio");
    }
    
    else {
        alert("El formulario se ha enviado con éxito")
    }
    
    var formulario = document.getElementById("respuesta");
    formulario.submit();
}
