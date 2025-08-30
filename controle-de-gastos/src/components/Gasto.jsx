import React from 'react';
import '../styles/Gasto.css';

function Gasto({ gasto, onDeleteGasto }) {
  return (
    <li className="gasto-item">
      <div>
        <p>Nome: {gasto.nome}</p>
        <p>Valor: R$ {gasto.valor}</p>
        <p>Categoria: {gasto.categoria}</p>
        <p>Data: {gasto.data}</p>
      </div>
      <button onClick={() => onDeleteGasto(gasto.id)}>Excluir</button>
    </li>
  );
}

export default Gasto;