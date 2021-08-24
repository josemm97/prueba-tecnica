/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import { CREAR_BLOQUE, AGREGAR_BLOQUE, ELIMINAR_BLOQUE } from '../types';

export const crearBloque = (bloque) => ({
  type: CREAR_BLOQUE,
  payload: bloque,
});
// eslint-disable-next-line no-unused-vars
const agregarBloque = (bloque) => ({
  type: AGREGAR_BLOQUE,
  payload: bloque,
});

const eliminarBloque = (bloques) => ({
  type: ELIMINAR_BLOQUE,
  payload: bloques,
});

export const crearBloqueAction = (bloque) => (
  (dispatch) => {
    dispatch(crearBloque(bloque));
    dispatch(agregarBloque(bloque));
  }
);
export const eliminarBloqueAction = (bloques) => (
  (dispatch) => {
    dispatch(eliminarBloque(bloques));
  }
);
