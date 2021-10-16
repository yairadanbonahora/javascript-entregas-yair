// //Contiene las funciones a ser utilizadas para el desarrollo de la página

// //función para verificar si hay stock de lo que quieren comprar
// const isStock = (quantity , stock) => {
//     if (quantity > stock) {
//         alert (`No tenemos suficiente stock. Tenemos dispoible ${stock}`)
//         return false;
//     } else return true;
// }

// //función genérica para mostrar mensajes por consola
// function mostrar (mensaje) {
//     console.log (mensaje);
// }

// //función para añadir al carrito// 
// // const addToCart = (option, quantity) => {
// //     switch (option) {
// //         case "Agujereadora de banco":
// //             isStock (quantity, agujereadoraDeBancoStock);
// //             cart += (quantity * agujereadoraDeBancoPrice);
// //             break;

// //         case "Balancin":
// //             isStock (quantity, balancinStock);
// //             cart += (quantity * balancinPrice);
// //             break;
        
// //         case "Cortadora de chapas":
// //             isStock (quantity, cortadoraDeChapasStock);
// //             cart += (quantity * cortadoraDeChapasPrice);
// //             break;

// //         case "Cortadora de fierros":
// //             isStock (quantity, cortadoraDeFierrosStock);
// //             cart += (quantity * cortadoraDeFierrosPrice);
// //             break;

// //         case "Plegadora":
// //             isStock (quantity, plegadoraStock);
// //             cart += (quantity * plegadoraPrice);
// //             break;
        
// //         default:
// //             break; 
// //     }
// //     mostrar (cart);
// // }

// //Esta función genera el menú dinámico en base a los productos existentes
// const showMenu = () => {
//     let menu = "Elija la máquina a comprar: \n"
//     maquinas.forEach ((maquina)=> {
//        menu += + maquina.id + ". " + maquina.name + "\n";
//     });
//     menu += (maquinas.length + 1) +  ". Salir"; 
//     return parseInt (prompt (menu));
// };

// // `Elija la máquina a comprar:
// // Agujereadora de banco
// // Balancin
// // Cortadora de chapas
// // Cortadora de fierros
// // Plegadora
// // Salir
// // `

// const addToCart = (option, quantity) => {
//     const found = maquinas.find (maquina=>maquina.id === option);
//     if (isStock (quantity, found.stock)){
//      cart += (quantity* found.price);
//      maquinas[option-1].stock -= quantity; 
//      alert (`${found.name} fue agregado al carrito`);
//     }  
//  }


//SEGUNDA ENTREGA//
