import React, { useState, useEffect } from "react";
import XisListaItem from "components/XisListaItem/XisListaItem";

import { XisService } from "services/XisService";



import "./XisLista.css";
import XisDetalhesModal from "components/XisDetalhesModal/XisDetalhesModal";

function XisLista() {
  const [xis, setXis] = useState([]);

  const getLista = async () => {
    const response = await XisService.getLista();
    setXis(response);
  };

  const [xisModal, setXisModal] = useState(false);
  // nunca coloque um estado que está sendo alterado dentro do useEffect como dependencia!!
  useEffect(() => {
    
    getLista();
  }, []);
console.log(xis)
  return (
    <div className="XisLista">
      {xis.map((xis, index) => (
        <XisListaItem
          key={`XisListaItem-${index}`}
          xis={xis}

          index={index}

        />
      ))}

      {xisModal && <XisDetalhesModal xis={xisModal} closeModal={()=>setXisModal(false)}/>}
      
    </div>
  );
}

export default XisLista;
