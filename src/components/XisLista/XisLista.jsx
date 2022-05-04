import React, { useState, useEffect, useCallback } from "react";
import XisListaItem from "components/XisListaItem/XisListaItem";
import { XisService } from "services/XisService";

import XisDetalhesModal from "components/XisDetalhesModal/XisDetalhesModal";

import "./XisLista.css";

import { ActionMode } from "constants/index";

function XisLista({ xisCriado, mode, updateXis, deleteXis, xisEditado }) {
  
  const [xis, setXis] = useState([]);

  const [xisSelecionado, setXisSelecionado] = useState({});

  const [xisModal, setXisModal] = useState(false);

  const adicionarItem = (xisIndex) => {
    const xis = {
      [xisIndex]: Number(xisSelecionado[xisIndex] || 0) + 1,
    };
    setXisSelecionado({ ...xisSelecionado, ...xis });
  };

  const removerItem = (xisIndex) => {
    const xis = { [xisIndex]: Number(xisSelecionado[xisIndex] || 0) - 1 };
    setXisSelecionado({ ...xisSelecionado, ...xis });
  };

  const getLista = async () => {
    const response = await XisService.getLista();
    setXis(response);
  };
  const getXisById = async (xisId) => {

    const response = await XisService.getById(xisId);

    const mapper = {
      [ActionMode.NORMAL]: () => setXisModal(response),
      [ActionMode.ATUALIZAR]: () => updateXis(response),
      [ActionMode.DELETAR]: () => deleteXis(response),
    };
    mapper[mode]();
  };

  useEffect(() => {
    getLista();
  }, [xisEditado]);

  const adicionaXisNaLista = useCallback(
    (xises) => {
      const lista = [...xis, xises];
      setXis(lista);
    },
    [xis]
  );

  useEffect(() => {
    if (xisCriado && !xis.map(({ id }) => id).includes(xisCriado.id)) {
      adicionaXisNaLista(xisCriado);
    }
  }, [adicionaXisNaLista, xisCriado, xis]);

  return (
    <div className="XisLista">
      {xis.map((xis, index) => (
        <XisListaItem
          mode={mode}
          key={`XisListaItem-${index}`}
          xis={xis}
          quantidadeSelecionada={xisSelecionado[index]}
          index={index}
          onRemove={(index) => removerItem(index)}
          onAdd={(index) => adicionarItem(index)}
          clickItem={(xisId) => getXisById(xisId)}
        />
      ))}
      {xisModal && (
        <XisDetalhesModal
          xis={xisModal}
          closeModal={() => setXisModal(false)}
        />
      )}
    </div>
  );
}

export default XisLista;
