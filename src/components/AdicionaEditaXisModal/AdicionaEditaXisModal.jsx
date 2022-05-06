import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { XisService } from "services/XisService";
import "./AdicionaEditaXisModal.css";

import { ActionMode } from "constants/index";

function AdicionaEditaXisModal({
  closeModal,
  onCreateXis,
  mode,
  xisToUpdate,
  onUpdateXis,
}) {
  const form = {
    preco: xisToUpdate?.preco ?? "",
    sabor: xisToUpdate?.sabor ?? "",
    descricao: xisToUpdate?.descricao ?? "",
    foto: xisToUpdate?.foto ?? "",
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
        String(state.preco).length
    );
    setCanDisable(response);
  };
  useEffect(() => {
    canDisableSendButton();
  });
  
  const handleSend = async () => {
    const renomeiaCaminhoFoto = (fotoPath) => fotoPath.split(/\\|\//).pop();

    const { sabor, descricao, preco, foto } = state;

    const xis = {
      ...(xisToUpdate && { _id: xisToUpdate?.id }),
      sabor,
      descricao,
      preco,
      foto: `images/${renomeiaCaminhoFoto(foto)}`,
    };

    const serviceCall = {
      [ActionMode.NORMAL]: () => XisService.create({
        ...xis,
        preco: parseFloat(xis.preco)}),
      [ActionMode.ATUALIZAR]: () => XisService.updtateById(xisToUpdate?.id, xis),
    }

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreateXis(response),
      [ActionMode.ATUALIZAR]: () => onUpdateXis(response),
    }

    actionResponse[mode]();

    const reset = {
      preco: '',
      sabor: '',
      descricao: '',
      foto: '',
    }

    setState(reset);

 
    closeModal();
  };
  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaXisModal">
        <form autoComplete="off">
        <h2> { ActionMode.ATUALIZAR === mode ? 'Atualizar' : 'Adicionar ao' } Cardápio </h2>
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
              onChange={(e) => handleChange(e, "foto")}
              required
            />
          </div>
          <button
            className="AdicionaXisModal__enviar"
            type="button"
            disabled={canDisable}
            onClick={handleSend}
          >
            {ActionMode.NORMAL === mode ? 'ENVIAR' : 'ATUALIZAR'}
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaEditaXisModal;
