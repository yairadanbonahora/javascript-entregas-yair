alert ("Bienvenido a Metalúrgica Claudio");
alert ("Por favor cree un usuario")

let usuarioIngresado = prompt ("Ingrese usuario");
const usuario = usuarioIngresado;

let contraseñaIngresada = prompt ("Ingrese una contraseña de 8 dígitos");
    while (contraseñaIngresada.length < 8 || contraseñaIngresada.length > 8) {
        alert ("Contraseña inválida");
        contraseñaIngresada = prompt ("Por favor ingrese una nueva contraseña de 8 dígitos");
    } 
console.log (contraseñaIngresada);

do {
    let option = (prompt(menu));
    if (option == "Salir") {
        alert ("Adiós");
        break; 
    }
    
    let quantity = parseInt (prompt(SelectedQuantity));
    addToCart (option, quantity);
    resp = prompt ("¿Desea seguir comprando? S/N");
} while (resp === "S"); 

if (cart > 0) {
    alert (`Su compra tiene un total de ${cart}`);
}

alert ("Gracias por su compra");