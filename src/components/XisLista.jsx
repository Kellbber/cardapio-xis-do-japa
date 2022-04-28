import React, { useState } from "react";
import "./XisLista.css";
import { xis } from "../mocks/xis.js";
function XisLista() {
    const [xisSelecionado, setxisSelecionado] = useState({});

    const adicionarItem = (xisIndex) => {
            const xis = { [xisIndex]: Number(xisSelecionado[xisIndex] || 0) +1 }
            setxisSelecionado({ ...xisSelecionado, ...xis});
    }
  return (
    <div className="XisLista">
      {xis.map((xis, index) => (
        <div className="XisListaItem " key={`XisListaItem-${index}`}>
          <span className="XisListaItem__badge">
            {xisSelecionado[index] || 0}
          </span>
          <div>
            <div className="XisListaItem__titulo">{xis.titulo}</div>
            <div className="XisListaItem__preco">{xis.preco.toFixed(2)}</div>
            <div className="XisListaItem__descricao">{xis.descricao}</div>
            <div className="XisListaItem__acoes Acoes">
              <button
                className="Acoes__adicionar Acoes__adicionar--preencher"
                onClick={() => adicionarItem(index)}
              >
                ADICIONAR
              </button>
            </div>
          </div>
          <img
            className="XisListaItem__foto"
            src={xis.foto}
            alt={`Xis de ${xis.sabor}`}
          />
        </div>
      ))}
    </div>
  );
}

export default XisLista;
