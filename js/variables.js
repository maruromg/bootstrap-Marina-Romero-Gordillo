const inputEmail = document.querySelector ("#inputEmail")
const inputConsulta = document.querySelector ("#inputConsulta")
const btn = document.querySelector ("#btn")

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

btn.addEventListener("click", (e) => {
    
    let isActive = false

    if(isActive) {
        btn.classList.add("demo-one")
        isActive = false
    }
    else {
        btn.classList.remove("demo-one")
        btn.classList.add("demo-two")
        isActive = true
    }
})
