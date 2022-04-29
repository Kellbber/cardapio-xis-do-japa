import React, { useState, useEffect } from "react";
import XisListaItem from "components/XisListaItem/XisListaItem";

import { XisService } from "services/XisService";

import "./XisLista.css";

function XisLista() {
  const [xis, setXis] = useState([]);
  const [xisSelecionado, setxisSelecionado] = useState({});

  const adicionarItem = (xisIndex) => {
    const xis = { [xisIndex]: Number(xisSelecionado[xisIndex] || 0) + 1 };
    setxisSelecionado({ ...xisSelecionado, ...xis });
  };
  const removerItem = (xisIndex) => {
    const xis = { [xisIndex]: Number(xisSelecionado[xisIndex] || 0) - 1 };
    setxisSelecionado({ ...xisSelecionado, ...xis });
  };

  const getLista = async () =>{
    const response = await XisService.getLista();
    setXis(response);
  }
  useEffect(()=>{
    getLista();
  },
  {})

  return (
    <div className="XisLista">
      {xis.map((xis, index) => (
        <XisListaItem
          key={`XisListaItem-${index}`}
          xis={xis}
          quantidadeSelecionada={xisSelecionado[index]}
          index={index}
          onRemove={(index) => removerItem(index)}
          onAdd={(index) => adicionarItem(index)}
        />
      ))}
    </div>
  );
}

export default XisLista;
