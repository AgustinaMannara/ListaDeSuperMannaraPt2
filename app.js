
let listaDeSuper = [];

listaDeSuper[0] = "sal";
listaDeSuper[1] = "huevos";
listaDeSuper[2] = "pan";
console.log(listaDeSuper);
console.log("La cantidad de elementos dentro del array es: " + listaDeSuper.length);
console.log("El primer elemento del array es: " + listaDeSuper[0]);

let ultimoElemento = listaDeSuper.length - 1;

console.log("El último elemento del array es: " + listaDeSuper[listaDeSuper.length - 1]);
console.log("El último elemento usando la variable es: " + listaDeSuper[ultimoElemento]);

listaDeSuper.push("leche");
listaDeSuper.push("galletitas");

console.log(listaDeSuper);


listaDeSuper.unshift("arroz");
listaDeSuper.unshift("fideos");

console.log(listaDeSuper);

console.log("La cantidad total de productos es: " + listaDeSuper.length);


let noHabia = listaDeSuper.pop();

console.log("El producto que no había es: " + noHabia);


let comprado = listaDeSuper.shift();

console.log("El producto comprado es: " + comprado);

console.log("El tamaño final de la lista es: " + listaDeSuper.length);

console.log(listaDeSuper);