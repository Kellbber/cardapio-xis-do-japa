import React, { useState, useEffect } from "react";

import XisListaItem from "components/XisListaItem/XisListaItem";

import { XisService } from "services/XisService";

// import XisDetalhesModal from "components/XisDetalhesModal/XisDetalhesModal";

import "./XisLista.css";
function XisLista() {
  const [xis, setXis] = useState([]);

  // const [xisModal, setXisModal] = useState(false);

  const getLista = async () => {
    const response = await XisService.getLista();
    setXis(response);
  };

  // nunca coloque um estado que está sendo alterado dentro do useEffect como dependencia!!
  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="XisLista">
      {xis.map((xis, index) => (
        <XisListaItem
          
          key={`XisListaItem-${index}`}
          xis={xis}
          index={index}
          // clickItem={(xisId) => setXisModal(xis)}
        />
      ))}
      {/* {xisModal && (
        <XisDetalhesModal
          paleta={xisModal}
          closeModal={() => setXisModal(false)}
        />
      )} */}
    </div>
  );
}

export default XisLista;
