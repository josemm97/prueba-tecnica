/* eslint-disable no-console */
// cada reducer tiene su propio state

import { CREAR_BLOQUE, AGREGAR_BLOQUE, ELIMINAR_BLOQUE } from '../types';

const initialState = {
  bloques: [],
  bloque: null,
  total: 0,

};

const BloqueReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREAR_BLOQUE:

      return {
        ...state,
        bloque: action.payload,
      };
    case AGREGAR_BLOQUE:
      return {
        ...state,
        bloques: [...state.bloques, action.payload],
      };
    case ELIMINAR_BLOQUE:
      return {
        ...state,
        bloques: action.payload,
      };
    default:
      return state;
  }
};
export default BloqueReducer;
