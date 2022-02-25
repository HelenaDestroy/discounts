function precioConDescuento(precio, descuento)
{  const porcentajePago = 100 - descuento;
    return (precio * porcentajePago) /100  
}
//pasar a ingles
const cambio = document.getElementById("idioma");
idioma.addEventListener("click", changeLanguage);

function changeLanguage()
{ return window.open(["index_i.html"],["Discount Calculator. English version"]);
      }
      
//volver a castellano
const cambia = document.getElementById("castellano");
castellano.addEventListener("click", cambioIdioma);
function cambioIdioma() { return window.open(["index.html"],["Calculador de Descuentos. Versión en Español"]);
}

function calcularPrecioConDescuento(){
const inputPrecio = document.getElementById("inputPrecio");
const inputDescuento = document.getElementById("inputDescuento");
const precioInicial = parseInt(inputPrecio.value);
const descuento = parseInt(inputDescuento.value);
const precioFinal = precioConDescuento(precioInicial, descuento);
const mostrar = document.getElementById("frase");
mostrar.innerText  = "El precio a pagar con el descuento aplicado es de: $" + precioFinal;
}
function calculateDiscount(){
    const inputPrecio = document.getElementById("inputPrecio");
    const inputDescuento = document.getElementById("inputDescuento");
    const precioInicial = parseInt(inputPrecio.value);
    const descuento = parseInt(inputDescuento.value);
    const precioFinal = precioConDescuento(precioInicial, descuento);
    const mostrar = document.getElementById("frase");
    mostrar.innerText  = "The final price is: $" + precioFinal;
    }
