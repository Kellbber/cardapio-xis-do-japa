import "./XisListaItem.css";
import "./Modal.css";
import "../Overlay/Overlay.css"

import { useState } from "react";

import Modal from "react-modal";

import XisDetalhesModal from "components/XisDetalhesModal/XisDetalhesModal";

import {XisService} from "services/XisService";

function XisListaItem({ xis }) {
  const [quantidade, setQuantidade] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const getXisById = async (xisId) => {
    const response = await XisService.getById(xisId);
    setModalIsOpen(response);
  };
  const customStyles = {
    content: {
      backgroundColor: 'transparent'
    },
  };
  // width: 100vw;
  // height: 100vh;
  // background: rgba(0, 0, 0, 0.4);
  // position: fixed;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // top: 0;
  // left: 0;
  function OpenModal() {
    setModalIsOpen(true);
  }

  function CloseModal() {
    setModalIsOpen(false);
    
  }
 
  function addQuantidade() {
    setQuantidade(quantidade + 1);
  }
  function removeQuantidade() {
    setQuantidade(quantidade - 1);
  }

  return (
    <>
      <div className="XisListaItem " onClick={OpenModal}>
        {quantidade > 0 && (
          <span className="XisListaItem__badge"> {quantidade} </span>
        )}
        <div>
          <div className="XisListaItem__titulo">{xis.titulo}</div>
          <div className="XisListaItem__preco">{xis.preco.toFixed(2)}</div>
          <div className="XisListaItem__descricao">{xis.descricao}</div>

          <div className="XisListaItem__acoes Acoes">
            <button
              onClick={(e) => {
                e.stopPropagation();
                addQuantidade();
              }}
              className={
                quantidade == 0
                  ? "Acoes__adicionar"
                  : "Acoes__adicionar Acoes__adicionar--preencher"
              }
            >
              ADICIONAR
            </button>
            {quantidade > 0 && (
              <button
                className="Acoes__remover"
                onClick={(e) => {
                  e.stopPropagation();
                  removeQuantidade();
                }}
              >
                REMOVER
              </button>
            )}
          </div>
        </div>
        <img
          className="XisListaItem__foto"
          src={xis.foto}
          alt={`Xis de ${xis.sabor}`}
        />
        
      </div>
      {modalIsOpen && (

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={CloseModal}
            style={customStyles}
          >
            <div className="Overlay">
            <div className="Modal">
              <button className="Modal__close" onClick={CloseModal}>
                +
              </button>
              <div className="Modal__body">
                <XisDetalhesModal xis={xis} getXisById={xis.id} />
              </div>
            </div>
            </div>
          </Modal>
        )}
    </>
  );
}

export default XisListaItem;
