let nintendo = document.getElementById('nintendo')
let play = document.getElementById('play')
let xbox = document.getElementById('xbox')
let itemNintendo = document.getElementById('itemsnintendo')
let itemXbox = document.getElementById('itemsxbox')
let itemPlay = document.getElementById('itemsplay')

let imgagenesN = ["/img/itemNintendoConsole.jpg","/img/itemNintendoGame.jpg","/img/itemNintendoExtras.jpg"]
let imgagenesP = ["/img/itemPlayConsole.jpg","/img/itemPlayGame.jpg","/img/itemPlayExtras.jpg"]
let imgagenesX = ["/img/itemXboxConsole.jpg","/img/itemXboxGame.jpg","/img/itemXboxExtras.jpg"]
/**Estilos CSS con JS */
nintendo.style.color = 'rgb(255, 0 ,10)'
nintendo.style.fontSize = '3.5rem'
itemXbox.style.display = 'none'
itemPlay.style.display = 'none'
itemXbox.style.opacity = '0'
itemPlay.style.opacity = '0'
/////////////////////COLORES MARCAS///////////////////

function color(colores=1){
    if(colores == 1){
        nintendo.style.color = 'rgb(255, 0 ,10)'
        play.style.color = 'white'
        xbox.style.color = 'white'
        nintendo.style.fontSize = '3.5rem'
        xbox.style.fontSize = '2rem'
        play.style.fontSize = '2rem'
        cambio(1)
    }else if(colores == 2){
        nintendo.style.color = 'white'
        play.style.color = 'rgb(73, 114, 218)'
        xbox.style.color = 'white'
        play.style.fontSize = '3.5rem'
        xbox.style.fontSize = '2rem'
        nintendo.style.fontSize = '2rem'
        cambio(2)
    }else if(colores == 3){
        nintendo.style.color = 'white'
        play.style.color = 'white'
        xbox.style.color = 'green'
        xbox.style.fontSize = '3.5rem'
        nintendo.style.fontSize = '2rem'
        play.style.fontSize = '2rem'
        cambio(3)
    }
}


function cambio(cambiar){
    if(cambiar == 1){
        itemNintendo.style.display = 'flex'
        itemXbox.style.display = 'none'
        itemPlay.style.display = 'none'
        
        setTimeout(() => {
            opacidad(1)
        }, 200); 
    }else if(cambiar == 2){
        itemNintendo.style.display = 'none'
        itemXbox.style.display = 'none'
        itemPlay.style.display = 'flex'


        setTimeout(() => {
            opacidad(2)
        }, 200); 
    }else if(cambiar == 3){
        itemNintendo.style.display = 'none'
        itemXbox.style.display = 'flex'
        itemPlay.style.display = 'none'

        setTimeout(() => {
            opacidad(3)
        }, 200); 
    }
}
function opacidad(aparece){
    if(aparece == 1){
        itemNintendo.style.opacity = '1'
        itemXbox.style.opacity = '0'
        itemPlay.style.opacity = '0'
    }else if(aparece == 2){
        itemNintendo.style.opacity = '0'
        itemXbox.style.opacity = '0'
        itemPlay.style.opacity = '1'
    }else if( aparece == 3){
        itemNintendo.style.opacity = '0'
        itemXbox.style.opacity = '1'
        itemPlay.style.opacity = '0'
    }

}

nintendo.addEventListener('click', () => color(1));
play.addEventListener('click', () => color(2));
xbox.addEventListener('click', () => color(3));

/***********************************************carrito **************************************************** */

/* elementos */
let carrito = document.querySelector('.carrito')
let pedidos = document.querySelector('.pedidos')
let botonAgregar = document.querySelectorAll('.agregar')
let contenidoCarrito = document.querySelector('.contenido-carrito')
let carritoInfo = document.querySelector('.carrito-info')
let agregarProductos = document.getElementById('agregar-productos')
let total = document.getElementById('total')
let comprar = document.getElementById('comprar')


let contadorCompra = 1;
let evento = 0;
let resultado = 0;
const carroCompra = {
    html: [14, 7, 2],
    metodos: {
        sumar: function(item){
            if(item + 1 <= 3){
                if(item + 1 == 1){
                   agregarProductos.innerHTML += `<li>Producto  <img src=${imgagenesN[0]} alt="compra">  Precio $${carroCompra.html[0]}</li>`
                   carroCompra.metodos.total(carroCompra.html[0])
                }else if(item + 1 == 2){
                    agregarProductos.innerHTML += `<li>Producto <img src=${imgagenesN[1]} alt="compra">  Precio $${carroCompra.html[1]}</li>`
                    carroCompra.metodos.total(carroCompra.html[1])
                 }else if(item + 1 == 3){
                    agregarProductos.innerHTML += `<li>Producto <img src=${imgagenesN[2]} alt="compra">  Precio $${carroCompra.html[2]}</li>`
                    carroCompra.metodos.total(carroCompra.html[2])
                 }
            }else if(item + 1 <= 6){
                if(item + 1 == 4){
                    agregarProductos.innerHTML += `<li>Producto <img src=${imgagenesX[0]} alt="compra">  Precio $${carroCompra.html[0]}</li>`
                    carroCompra.metodos.total(carroCompra.html[0])
                 }else if(item + 1 == 5){
                     agregarProductos.innerHTML += `<li>Producto <img src=${imgagenesX[1]} alt="compra">  Precio $${carroCompra.html[1]}</li>`
                     carroCompra.metodos.total(carroCompra.html[1])
                  }else if(item + 1 == 6){
                     agregarProductos.innerHTML += `<li>Producto <img src=${imgagenesX[2]} alt="compra">  Precio $${carroCompra.html[2]}</li>`
                     carroCompra.metodos.total(carroCompra.html[2])
                  }
            }else{
                if(item + 1 == 7){
                    agregarProductos.innerHTML += `<li>Producto <img src=${imgagenesP[0]} alt="compra"> Precio $${carroCompra.html[0]}</li>`
                    carroCompra.metodos.total(carroCompra.html[0])
                 }else if(item + 1 == 8){
                     agregarProductos.innerHTML += `<li>Producto <img src=${imgagenesP[1]} alt="compra"> Precio $${carroCompra.html[1]}</li>`
                     carroCompra.metodos.total(carroCompra.html[1])
                  }else if(item + 1 == 9){
                     agregarProductos.innerHTML += `<li>Producto <img src=${imgagenesP[2]} alt="compra"> Precio $${carroCompra.html[2]}</li>`
                     carroCompra.metodos.total(carroCompra.html[2])
                  }
            }
        },
        total: function(t){
            resultado += t;
            total.innerHTML = `Total: $${resultado}`
        },
        mostrar: function(){
            pedidos.innerHTML = `${contadorCompra}`;
            contadorCompra += 1
        },
        mostrarCarro: function(){
            
            if(evento == 0){
                carritoInfo.style.height = '300px'
                carritoInfo.style.width = '300px'
                carritoInfo.style.overflow = 'scroll'
                carritoInfo.style.border = '1px solid white'
                evento = 1;
            }else{
                carritoInfo.style.width = '0'
                carritoInfo.style.height = '0'
                carritoInfo.style.overflow = 'hidden'
                setTimeout(() => {
                    carritoInfo.style.border = 'none'
                }, 550);
                evento = 0;
            }
        },
        comprar: function(){
            while(agregarProductos.firstChild) {
                agregarProductos.removeChild(agregarProductos.firstChild);
            }
            contadorCompra = 0
            pedidos.innerHTML = `${contadorCompra}`;
        }
    }
}


for(let i = 0; i < botonAgregar.length; i++){
    botonAgregar[i].addEventListener('click', () => carroCompra.metodos.mostrar())
    botonAgregar[i].addEventListener('click', () => carroCompra.metodos.sumar(i))
}
comprar.addEventListener('click', () => carroCompra.metodos.comprar())
carrito.addEventListener('click', () => carroCompra.metodos.mostrarCarro())







































