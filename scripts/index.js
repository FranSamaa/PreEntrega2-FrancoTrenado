//Declaro una array
const Iphones=[];

class iphone{
    constructor(){
        this.id = Iphones.length+1
        this.nombre= prompt("ingrese el nombre del producto")
        this.precio= parseFloat(prompt("ingrese el precio del producto"))
        this.cantidad= parseInt(prompt("ingrese la cantidad del producto"))
        this.url= prompt("ingrese la url del producto")
    }
};

//doy a conocer las funciones

let opciones = prompt("ingrese una opcion: \n 1. Agregar un producto \n 2. Ver productos \n 3. Salir")

const agregarIphones = () => {
    const newIphone = new iphone()
    Iphones.push(newIphone)
    console.log("Producto agregado")
}



const mostrarIphones = () => {
    
    let container =document.getElementById("product-container");

    console.log("Estos son los productos que tenemos");
    Iphones.forEach((iphone,index) => {
        let card = `<div class="card" style="width: 18rem;">
        <img src= "${iphone.url}" class="card-img-top" alt="Producto ${index}">
        <div class="card-body">
          <h5 class="card-title">${iphone.nombre}</h5>
          <p class="card-text">Precio: ${iphone.precio} </p>
          <p class="card-text">Cantidad: ${iphone.cantidad}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
        `
        container.insertAdjacentHTML('beforeend', card);
        console.log((index+1),iphone)
    })
}

const menu = () => {
    switch(opciones){
        case "1":
            agregarIphones()
            break;
        case "2":
            mostrarIphones()
            break;
        case "3":
            console.log("Gracias por visitarnos")
            break;
        default:
            console.log("Opcion invalida")
    }
    opciones = prompt("ingrese una opcion: \n 1. Agregar un producto \n 2. Ver productos \n 3. Salir")
}

while(opciones !== "3"){
    menu(opciones);
}

