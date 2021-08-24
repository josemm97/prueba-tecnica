/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

const Container = styled.div`
  display:grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  min-height: 80vh;
  background-color: #fff;
  margin: 1rem 0;
 @media (max-width: 720px){
  grid-template-columns: 1fr;
 }


`;
const Mensaje = styled.div`
min-height: calc(100 - 788);
grid-column: 2;
display: flex;
justify-content: center;
align-items: center;
width: 100%;


`;
const Table = styled.table`
  border: 1px solid black;
  width: 50%;
  height: 50vh;
  background-color: #d1dce9;
  thead{
    tr{
      border: 1px solid black;
    }
    th{
      border: 1px solid black;
    }

  }

  tbody{
    tr{
      border: 1px solid yellow;
      td{
        border: 1px solid black;
        
        tr{
          border: 1px solid gray;
        }
      }
    }
  }

`;

const BlocksContainer = styled.div`
  /* background-color: cyan; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const ContainerTotal = styled.div`
  /* background-color: cyan; */
  display: flex;
  flex: 1;
  span{
    font-weight: bold;
    margin: .8rem .5rem;
    font-size: 1rem;
    /* background-color: yellow; */
  }
  p{
    font-weight: bold;
    margin-top: .8rem;
    font-size: 1rem;
  }
`;
function Card() {
  const blockState = useSelector(((state) => state.blocks.bloques));

  return (
    <Container>
      {blockState && blockState.length > 0 ? blockState.map((bloque) => (
        <BlocksContainer key={bloque.id}>
          <Table border="1">
            <thead>
              <tr>
                <th colSpan="2">Ingresos</th>
                <th colSpan="2">Egresos</th>
              </tr>
              <tr>
                <th>Concepto</th>
                <th>valor</th>
                <th>Concepto</th>
                <th>valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  { bloque.ingresos.map((ingresar, index) => (

                    <tr>
                      Concepto
                      {''}
                      {index + 1}
                    </tr>
                  ))}
                </td>
                <td>
                  { bloque.ingresos.map((ingreso, index) => (

                    <tr>
                      {ingreso}
                    </tr>
                  ))}
                </td>
                <td>
                  { bloque.egresos.map((egreso, index) => (

                    <tr>
                      Concepto
                      {''}
                      {index + 1}
                    </tr>
                  ))}
                </td>
                <td>
                  { bloque.egresos.map((egreso, index) => (

                    <tr>
                      {egreso}
                    </tr>
                  ))}
                </td>

              </tr>

            </tbody>
            <ContainerTotal>
              <span>Total:</span>
              <p>{bloque.total}</p>
            </ContainerTotal>
          </Table>
        </BlocksContainer>
      )) : (
        <Mensaje>
          <p>Agregue un bloque</p>
        </Mensaje>
      )}
    </Container>
  );
}

export default Card;
