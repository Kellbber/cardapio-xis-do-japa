import React, { useState } from "react";
import XisListaItem from "components/XisListaItem/XisListaItem";
import "./XisLista.css";
import { xis } from "mocks/xis.js";
function XisLista() {
    const [xisSelecionado, setxisSelecionado] = useState({});

    const adicionarItem = (xisIndex) => {
            const xis = { [xisIndex]: Number(xisSelecionado[xisIndex] || 0) +1 }
            setxisSelecionado({ ...xisSelecionado, ...xis});
    }
    const removerItem = (xisIndex) => {
        const xis = { [xisIndex]: Number(xisSelecionado[xisIndex] || 0) -1 }
        setxisSelecionado({ ...xisSelecionado, ...xis});
}

  return (
    <div className="XisLista">
      {xis.map((xis, index) => (
        <XisListaItem key={`XisListaItem-${index}`}/>
      ))}
    </div>
  );
}

export default XisLista;
