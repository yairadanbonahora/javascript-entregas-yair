//Contiene las funciones a ser utilizadas para el desarrollo de la página

//función para verificar si hay stock de lo que quieren comprar
const isStock = (quantity , stock) => {
    if (quantity > stock) {
        alert (`No tenemos suficiente stock. Tenemos dispoible ${stock}`)
        return false;
    } else return true;
}

//función genérica para mostrar mensajes por consola
function mostrar (mensaje) {
    console.log (mensaje);
}

//función para añadir al carrito// 
const addToCart = (option, quantity) => {
    switch (option) {
        case "Agujereadora de banco":
            isStock (quantity, agujereadoraDeBancoStock);
            cart += (quantity * agujereadoraDeBancoPrice);
            break;

        case "Balancin":
            isStock (quantity, balancinStock);
            cart += (quantity * balancinPrice);
            break;
        
        case "Cortadora de chapas":
            isStock (quantity, cortadoraDeChapasStock);
            cart += (quantity * cortadoraDeChapasPrice);
            break;

        case "Cortadora de fierros":
            isStock (quantity, cortadoraDeFierrosStock);
            cart += (quantity * cortadoraDeFierrosPrice);
            break;

        case "Plegadora":
            isStock (quantity, plegadoraStock);
            cart += (quantity * plegadoraPrice);
            break;
        
        default:
            break; 
    }
    mostrar (cart);
}

