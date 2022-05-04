import "./DeletaXisModal.css";
import Modal from "components/Modal/Modal";
import { XisService } from "services/XisService";

function DeletaXisModal({ closeModal, xisParaDeletar, onDeleteXis }) {
  const handleDelete = async (xis) => {
    await XisService.deleteById(xis.id);
    onDeleteXis(xis);
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <div className="DeletaXisModal">
        <h2>Confirmação</h2>
        <p>
          Você realmente deseja remover <b>{xisParaDeletar.sabor}</b> do
          cardápio?
        </p>

        <img
          className="DeletaXisModal__foto"
          src={xisParaDeletar.foto}
          alt={xisParaDeletar.sabor}
        />

        <br />

        <div>
          <button
            onClick={() => handleDelete(xisParaDeletar)}
            className="DeletaXisModal__confirmar"
          >
            {" "}
            Confirmar{" "}
          </button>
          <button onClick={closeModal} className="DeletaXisModal__cancelar">
            {" "}
            Cancelar{" "}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeletaXisModal;