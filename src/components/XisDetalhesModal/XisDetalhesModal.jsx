import "./XisDetalhesModal.css"

import Modal from "components/Modal/Modal";

function XisDetalhesModal({ xis, closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="XisDetalhesModal">
        <div>
          <div className="XisDetalhesModal__titulo"> {xis.titulo} </div>
          <div className="XisDetalhesModal__preco">
            {" "}
            R$ {Number(xis.preco).toFixed(2)}{" "}
          </div>
          <div className="XisDetalhesModal__descricao">
            {" "}
            <b>Sabor:</b> {xis.sabor}{" "}
          </div>
          
          
          <div className="XisDetalhesModal__descricao">
            {" "}
            <b>Descrição:</b> {xis.descricao}{" "}
          </div>
        </div>
        <img
          className="XisDetalhesModal__foto"
          src={xis.foto}
          alt={xis.sabor}
        />
      </div>
    </Modal>
  );
}

export default XisDetalhesModal;