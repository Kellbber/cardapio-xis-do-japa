import React, { useState, useEffect } from "react";
import XisListaItem from "components/XisListaItem/XisListaItem";
import { XisService } from "services/XisService";

import XisDetalhesModal from "components/XisDetalhesModal/XisDetalhesModal";


import "./XisLista.css";


function XisLista({xisCriado}) {

  const [xis, setXis] = useState([]);

  const [xisSelecionado, setXisSelecionado] = useState({});

  const [xisModal, setXisModal] = useState(false);
  

  const adicionarItem = (xisIndex) => {
    const xis = {
      [xisIndex]: Number(xisSelecionado[xisIndex] || 0) + 1};
    setXisSelecionado({...xisSelecionado, ...xis});
  };

  const removerItem = (xisIndex) => {
    const xis = { [xisIndex]: Number(xisSelecionado[xisIndex] || 0) -1 }
    setXisSelecionado({...xisSelecionado, ...xis});
}

const getLista = async ()=>{
  const response = await XisService.getLista();
  setXis(response);
}
const getXisById = async (xisId)=>{
  const response = await XisService.getById(xisId);
  setXisModal(response);
}

const adicionaXisNaLista = (xises) => {
  const lista = [...xis, xises];
  setXis(lista);
};
useEffect(() => {
  if (xisCriado) adicionaXisNaLista(xisCriado);
}, [xisCriado]);

useEffect(()=>{
  getLista();
},[]);
  return (
    <div className="XisLista">
      {xis.map((xis, index) => (
          <XisListaItem 
          key={`XisListaItem-${index}`}
          xis={xis}
          quantidadeSelecionada={xisSelecionado[index]}
          index={index}
          onRemove={index =>removerItem(index)}
          onAdd={index => adicionarItem(index)}
          clickItem={(xisId)=>getXisById(xisId)}/>
      ))}
      {xisModal && <XisDetalhesModal xis={xisModal} closeModal={()=> setXisModal(false)} />}
    </div>
  );
}

export default XisLista;
