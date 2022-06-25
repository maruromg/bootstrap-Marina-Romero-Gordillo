const productos =[]
const carrito =[]

class Producto{

    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
    preciofinal(){
        return parseFloat((this.precio*impuesto).toFixed(2))
    }
}

function agregarProducto(){
    debugger
    let id= Id()
    let nombre= prompt("Ingresa el nombre del producto:")
    let precio= parseInt(prompt("Ingresa el precio del producto:"))
    productos.push(new Producto(id,nombre,precio))
}

function Id(){
    return parseInt(Math.random()*1000)
}


function generadorProductos(){
    productos.push(new Producto(1234,"jean",5000))
    productos.push(new Producto(4567,"vestido",5000))
    productos.push(new Producto(7890, "camisa",6500))
}


function calculoCarrito(){
    console.clear()
    debugger
    let total = carrito.reduce((acc, Producto)=> acc + Producto.precio, 0)
    console.log("Total del carrito:", total)
}

function hacerCarrito (){
    carrito.push(new Producto(1234,"jean",5000))
    carrito.push(new Producto(4567,"vestido",5000))
    carrito.push(new Producto(7890,"camisa",6500))
}
hacerCarrito()
