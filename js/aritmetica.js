export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

//agrupar funciones y devolverlas en un objeto
export const aritmetica = {
  sumar, // cuando valor y propiedad tienen el mismo nombre -> sumar: sumar <- solo se pone el nombre
  restar,
};
