import React from "react";

function Total({ total }) {
    return (
        <div className="total-container">
            <h3>Total de Gastos</h3>
            <h2>R$ {total}</h2>
        </div>
    );
}


export default Total;