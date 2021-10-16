// alert ("Bienvenido a Metalúrgica Claudio");
// alert ("Por favor cree un usuario")

// let usuarioIngresado = prompt ("Ingrese usuario");
// const usuario = usuarioIngresado;

// let contraseñaIngresada = prompt ("Ingrese una contraseña de 4 dígitos");
//     while (contraseñaIngresada.length < 4 || contraseñaIngresada.length > 4) {
//         alert ("Contraseña inválida");
//         contraseñaIngresada = prompt ("Por favor ingrese una nueva contraseña de 4 dígitos");
//     } 
// console.log (contraseñaIngresada);

// do {
//     let option = showMenu ();
//     if (option === "Salir") {
//         alert ("Adiós");
//         break; 
//     } else {
//         let quantity = parseInt (prompt(SelectedQuantity));
//         addToCart (option, quantity);
//         resp = prompt ("¿Desea seguir comprando? S/N");
//     }
    
// } while (resp === "S"); 

// if (cart > 0) {
//     alert (`Su compra tiene un total de $${cart}. Gracias por su compra!`);
// }

// alert ("Vuelva pronto!");


//SEGUNDA ENTREGA//
let menu = document.getElementById ("menu");
menu.onclick = () => {
    let contenedorDiv = document.createElement ("div");
    menu.appendChild (contenedorDiv);
    let div = document.createElement ("div");
    div.innerHTML = `<div class="elemento">Productos</div>
                    <div class="elemento">Máquinas</div>`;
    contenedorDiv.appendChild (div);
    menu.onclick = "";  

    let divProductos = document.getElementsByClassName ("elemento") [0];
    divProductos.onclick = () => {
        let contenedorProduc = document.createElement ("ul");
        divProductos.appendChild (contenedorProduc);
        for (const producto of productos) {
            let div = document.createElement ("div");
            div.innerHTML = `<div class="opciones"><input type="Radio" name="produc-selected" class="optionSelected"> ${producto.name}. Precio: $${producto.price} </div>`;
            contenedorProduc.appendChild (div);

            if (".optionSelected:checked") {
              divProductos.onclick = "";  
            }
        }

        let btnSiguiente = document.createElement ("button");
        btnSiguiente.innerHTML = "Siguiente";
        divProductos.appendChild (btnSiguiente);

        btnSiguiente.onclick = () => {
            let formCantidad = document.createElement ("form");
            formCantidad.innerHTML = `<input type="text" placeholder="Indique cantidad" class="inputCantidad">`
            divProductos.appendChild (formCantidad);

            let btnComprar = document.createElement ("button");
            btnComprar.innerHTML = "Comprar";
            divProductos.appendChild (btnComprar);

            // btnComprar.onclick = () => {
            //     if (parseInt(formCantidad) > `.optionSelected:checked[${productos.stock}]`) {
            //         let noStock = document.createElement ("p");
            //         noStock.innerHTML = "No hay suficiente stock";
            //         divProductos.appendChild (noStock);
            //     }
            // }
            
        }
    }

    let divMaquinas = document.getElementsByClassName ("elemento") [1];
    divMaquinas.onclick = () => {
        let contenedorMaquinas = document.createElement ("ul");
        divMaquinas.appendChild (contenedorMaquinas);
        for (const maquina of maquinas) {
            let div = document.createElement ("div");
            div.innerHTML = `<div class="opciones"><input type="Radio" name="produc-selected" class="optionSelected"> ${maquina.name}. Precio: $${maquina.price} </div>`;
            contenedorMaquinas.appendChild (div);

            if (".optionSelected:checked") {
                divMaquinas.onclick = "";  
              }
        }
        
        let btnSiguiente = document.createElement ("button");
        btnSiguiente.innerHTML = "Siguiente";
        divMaquinas.appendChild (btnSiguiente);

        btnSiguiente.onclick = () => {
            let formCantidad = document.createElement ("form");
            formCantidad.innerHTML = `<input type="text" placeholder="Indique cantidad" class="inputCantidad">`
            divMaquinas.appendChild (formCantidad);

            let btnComprar = document.createElement ("button");
            btnComprar.innerHTML = "Comprar";
            divMaquinas.appendChild (btnComprar);
        } 
    }
}