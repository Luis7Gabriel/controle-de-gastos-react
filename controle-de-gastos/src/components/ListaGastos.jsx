import React from 'react';
import Gasto from './Gasto';
import '../styles/ListaGastos.css';

function ListaGastos({ gastos, onDeleteGasto }) {
  return (
    <div className="lista-gastos">
      <h2>Lista de Gastos</h2>
      {gastos.length === 0 ? (
        <p>Nenhum gasto adicionado ainda.</p>
      ) : (
        <ul>
          {gastos.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              onDeleteGasto={onDeleteGasto}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaGastos;