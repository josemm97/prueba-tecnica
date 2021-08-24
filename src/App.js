/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import Card from './Components/Card';
import {
  generarLongitud, GenerarNumeros, generarValores, total,
  eliminar,
} from './helpers';
import { crearBloqueAction, eliminarBloqueAction } from './actions/actionsBloque';

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  height: auto;
  align-items: center;
  button{
    width: 60px;
    height: 73px;
    padding: 1rem;
    margin-right: 1rem;
    color: blue;
margin-bottom: 1rem;
    &::last-of-type{
      margin:0;
    }
    span{
      font-size: 2rem;
    }
  }
  
`;
function App() {
  const dispatch = useDispatch();
  const [longitudIngresos, setLongitudIngresos] = React.useState();
  const [longitudEgresos, setLongitudEgresos] = React.useState();
  const [generar, setGenerar] = React.useState(true);
  const [bloques, setbloques] = React.useState(null);
  const blocksState = useSelector((state) => state.blocks);
  console.log('selector', blocksState.bloques);
  //
  React.useEffect(() => {
    if (generar) {
      const longI = generarLongitud();
      // const longE = generarLongitud();
      setLongitudIngresos(longI);
      setLongitudEgresos(generarLongitud());
    } if (!blocksState.bloques) {
      return;
    }
    setbloques(blocksState.bloques);

    setGenerar(false);
  }, [generar]);
  console.log(longitudIngresos);
  const onClickAdd = () => {
    // const longI = generarLongitud();
    //     const longE = generarLongitud();
    const bloque = {
      ingresos: generarValores(longitudIngresos),
      egresos: generarValores(longitudEgresos),
    };
    setGenerar(true);
    console.log(bloque);
    const sumaIngresos = total(bloque.ingresos);
    const sumaEgresos = total(bloque.egresos);
    const resta = sumaIngresos - sumaEgresos;
    bloque.total = resta;
    console.log(resta);
    dispatch(crearBloqueAction(bloque));
  };
  //
  const onClickDelete = () => {
    const nuevosBloques = eliminar(bloques);

    console.log('length', nuevosBloques);
    dispatch(eliminarBloqueAction(nuevosBloques));
  };

  return (
    <>
      <Card />
      <ButtonsContainer>
        <button type="button" onClick={onClickAdd}>
          <span>&#x0002B;</span>
        </button>
        <button type="button" onClick={onClickDelete}>
          <span>-</span>
        </button>
      </ButtonsContainer>
    </>
  );
}

export default App;
