const inputNombre = document.querySelector("#nombre") 
const inputApellido = document.querySelector("#apellido") 
const inputTelefono = document.querySelector("#inputtelefono") 
const inputEmail = document.querySelector( "#inputEmail") 
const inputAddress = document .querySelector("#inputAddress")
const btnSubmit = document.querySelector("#submit") 

let datosDeInput = ""

function guardarDatosDeUsr() {
    const datosDeUsr = {nombre: inputNombre.value, 
                        apellido: inputApellido.value,
                        telefono: inputTelefono.value, 
                        email: inputEmail.value, 
                        address: inputAddress.value,
    }
    let str = JSON.stringify(datosDeUsr) 
    localStorage.setItem("datosDeUsr", str)
} 

function recuperoDatosDeUsr() {
    if (localStorage.getItem("datosDeUsr")) {
        const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
            inputNombre.value = datosDeUsr.nombre
            inputApellido.value = datosDeUsr.apellido
            inputTelefono.value = datosDeUsr.telefono
            inputEmail.value = datosDeUsr.email
            inputAddress.value = datosDeUsr.address
    }
}
recuperoDatosDeUsr()