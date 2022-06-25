const inputEmail = document.querySelector ("#inputEmail")
const inputConsulta = document.querySelector ("#inputConsulta")

let datosDeInput = ""

const Captura = ()=> {
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("input", ()=>{
                console.log(inputConsulta.value)
            })
        }
    }
}

Captura()

const Impedir = ()=> {
    const labels = document.getElementById("Form").elements;
    for(const i=0, label; label = labels[i++];) {
            if (label.type === text && label.value === "")
                document.addEventListener("submit", (e)=> {
                    e.preventDefault()
                }
                alert("Al menos un campo del formulario esta vacio");
    }
}

Impedir()