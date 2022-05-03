import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { XisService } from "services/XisService";
import "./AdicionaEditaXisModal.css";

function AdicionaEditaXisModal({ closeModal, onCreateXis }) {
  const form = {
    preco: "",
    sabor: "",
    descricao: "",
    foto: "",
  };

  const [state, setState] = useState(form);

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  const [canDisable, setCanDisable] = useState(true);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.descricao.length &&
        state.foto.length &&
        state.sabor.length &&
        state.preco.length
    );
    setCanDisable(response);
  };
  useEffect(() => {
    canDisableSendButton();
})
  const createXis = async () => {

    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split("\\").pop();

    const { sabor, descricao, preco, foto } = state;

    const xis = {
      sabor,
      descricao,
      preco,
      foto: `images/${renomeiaCaminhoFoto(foto)}`,
    };

    const response = await XisService.create({
        ...xis,
        preco: parseFloat(xis.preco)
    });
    onCreateXis(response)
    closeModal();
  };
  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaXisModal">
        <form autoComplete="off">
          <h2> Adicionar ao Cardápio </h2>
          <div>
            <label className="AdicionaXisModal__text" htmlFor="preco">
              {" "}
              Preco:{" "}
            </label>
            <input
              id="preco"
              placeholder="10,00"
              type="text"
              value={state.preco}
              onChange={(e) => handleChange(e, "preco")}
              required
            />
          </div>
          <div>
            <label className="AdicionaXisModal__text" htmlFor="sabor">
              {" "}
              Sabor:{" "}
            </label>
            <input
              id="sabor"
              placeholder="digite um sabor"
              type="text"
              value={state.sabor}
              onChange={(e) => handleChange(e, "sabor")}
              required
            />
          </div>
          <div>
            <label className="AdicionaXisModal__text" htmlFor="descricao">
              {" "}
              Descricao:{" "}
            </label>
            <input
              id="descricao"
              placeholder="Detalhe o produto"
              type="text"
              value={state.descricao}
              onChange={(e) => handleChange(e, "descricao")}
              required
            />
          </div>
          <div>
            <label
              className="AdicionaXisModal__text  AdicionaXisModal__foto-label"
              htmlFor="foto"
            >
              {!state.foto.length ? "Selecionar Imagem" : state.foto}
            </label>
            <input
              className=" AdicionaXisModal__foto"
              id="foto"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              value={state.foto}
              onChange={(e) => handleChange(e, "foto")}
              required
            />
          </div>
          <button
            className="AdicionaXisModal__enviar"
            type="button"
            disabled={canDisable}
            onClick={createXis} >
            Enviar
            </button>

        </form>
      </div>
    </Modal>
  );
}

export default AdicionaEditaXisModal;
