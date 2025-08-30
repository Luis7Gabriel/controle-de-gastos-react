import React, { useState } from 'react';
import '../styles/Formulario.css';

function Formulario({onAddGasto}) {
  const [gasto, setGasto] = useState({
      nome: '',
      valor: '',
      categoria: ''
  });

  const handleChange = e => {
      setGasto({
        ...gasto,
        [e.target.id]: e.target.value
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gasto.nome || !gasto.valor || !gasto.categoria) {
      alert('Por Favor, preencha todos os campos!');
      return
    }

    const novoGasto = {
      ...gasto, 
      valor: Number(gasto.valor)
    };

    onAddGasto(novoGasto);

    setGasto({
      nome: '',
      valor: '',
      categoria: ''
    });
  };

  return (

    <div className='formulario-container'>
      <h2>Adicionar Novo Gasto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome do Gasto:</label>
          <input type="text" id="nome" placeholder= "Ex: Aluguel" value={gasto.nome} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="valor">Valor:</label>
          <input type="number" id="valor" placeholder= "Ex: 500" value={gasto.valor} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="categoria">Categoria:</label>
          <select id="categoria" value={gasto.categoria} onChange={handleChange}>
            <option value="">--Selecione--</option>
            <option value="casa">Casa</option>
            <option value="comida">Comida</option>
            <option value="transporte">Transporte</option>
            <option value="lazer">Lazer</option>
            <option value="saude">Saúde</option>
          </select>
        </div>
        <button type='submit'>Adicionar Gasto</button>
      </form>
    </div>
  );
}

export default Formulario