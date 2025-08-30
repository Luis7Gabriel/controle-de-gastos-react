import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaGastos from './components/ListaGastos';
import Total from './components/Total';

function App() {
  const [gastos, setGastos] = useState(() => {
  const gastosSalvos = localStorage.getItem('gastos');
  
  return gastosSalvos ? JSON.parse(gastosSalvos) : [];
});
  
const totalGastos = gastos.reduce((total, gasto) => total + gasto.valor, 0);
  
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);

  

  
const handleAddGasto = (novoGasto) => {
    
  const gastoComId = {
      ...novoGasto,
      id: Date.now(),
      data: new Date().toLocaleDateString('pt-BR')
    };
    setGastos([...gastos, gastoComId]);
  };
  
  const handleDeleteGasto = (id) =>{
    
    const gastosAtualizados = gastos.filter(gasto => gasto.id !== id);
    setGastos(gastosAtualizados);
  }
  
  return (
    <>
      <Header/>
      <main className='layout'>
      <Formulario onAddGasto={handleAddGasto}/>
      <div className='resultados-layout'>
      <ListaGastos gastos={gastos} onDeleteGasto={handleDeleteGasto}/>
      <Total total={totalGastos}/>
      </div>
      </main>
    </>
  )
}

export default App
