/* eslint-disable no-plusplus */
export function GenerarNumeros(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function generarLongitud() {
  let len;
  for (let i = 0; i < 1; i++) {
    len = GenerarNumeros(1, 10);
  }
  return len;
}
export function generarValores(len) {
  const array = [];
  for (let i = 1; i <= len; i++) {
    array.push(GenerarNumeros(1, 10) * 1000);
  }
  return array;
}

export function total(array) {
  const suma = array.reduce((a, b) => a + b, 0);
  return suma;
}

export function eliminar(array) {
  array.pop();
  return array;
}
