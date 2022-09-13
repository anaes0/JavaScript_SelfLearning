import { PI, usuario, saludar, Saludar } from "./constantes.js";
import { sumar, restar, aritmetica } from "./aritmetica.js";

console.log("Archivo modulos.js");

console.log(PI);
console.log(`Hola ${usuario}`);

console.log(sumar(10, 5));
console.log(restar(7, 3));
console.log(aritmetica.sumar(2, 2));

saludar("Ana");

//crear instancia de la clase Saludar
let saludo = new Saludar();

saludo;
