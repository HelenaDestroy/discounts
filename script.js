// const precioInicial = 120 ;   //100
// const descuento = 18;    //15
// const porcentajePago = 100 - descuento; //Resta el descuento ofrecido al total. 100-precioreal-  100 - 15=(85)

// const precioFinal = ((precioInicial * porcentajePago) /100);  //resultado de 120*(85)/100     )ahora se usa el precio original, lo multiplica por el porcentajededescuento, para luego dividirlo por cien y sacar el PRECIO CON EL DESCUENTO APLICADO. NO YA EN PORCENTAJE SINO EN NUMERO.

// console.log({precioInicial, descuento, porcentajePago, precioFinal});

function precioConDescuento(precio, descuento)
{
    const porcentajePago = 100 - descuento;
    return (precio * porcentajePago) /100  
}


function calcularPrecioConDescuento(precio, descuento){
const inputPrecio = button.addEventListener("inputPrecio");
const inputDescuento = button.addEventListener("inputDescuento");
const precio = parseInt(inputPrecio.value);
const descuento = parseInt(inputDescuento.value);
const precioFinal = precioConDescuento(precio, descuento);
alert("El precio a pagar con el descuento aplicado es de: $" + precioFinal);
}