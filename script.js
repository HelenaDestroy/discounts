function precioConDescuento(precio, descuento)
{  const porcentajePago = 100 - descuento;
    return (precio * porcentajePago) /100  
}


function calcularPrecioConDescuento(){
const inputPrecio = document.getElementById("inputPrecio");
const inputDescuento = document.getElementById("inputDescuento");
const precioInicial = parseInt(inputPrecio.value);
const descuento = parseInt(inputDescuento.value);
const precioFinal = precioConDescuento(precioInicial, descuento);
alert("El precio a pagar con el descuento aplicado es de: $" + precioFinal);
}