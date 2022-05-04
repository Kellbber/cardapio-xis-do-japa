import "./Home.css";
import XisLista from "components/XisLista/XisLista";
import AdicionaEditaXisModal from "components/AdicionaEditaXisModal/AdicionaEditaXisModal";
import Navbar from "components/Navbar/Navbar";

import { ActionMode } from "constants/index";

import { useState } from "react";

function Home() {
  const [xisEditado, setXisEditado] = useState();

  const [canShowAdicionaXisModal, setCanShowAdicionaXisModal] = useState(false);

  const [xisParaAdicionar, setXisParaAdicionar] = useState();

  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  const [xisParaEditar, setXisParaEditar] = useState();

  const [xisParaDeletar, setXisParaDeletar] = useState();

  
  const handleDeleteXis = (xisToDelete) => {
    setXisParaDeletar(xisToDelete);
  }
  
  
  const handleUpdateXis = (xisToUpdate) => {
    setXisParaEditar(xisToUpdate);
    setCanShowAdicionaXisModal(true);
  }
  const handleCloseModal = () => {
    setCanShowAdicionaXisModal(false);
    setXisParaAdicionar();
    setXisParaDeletar();
    setXisParaEditar();
    setModoAtual(ActionMode.NORMAL);
  }
  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        createXis={() => setCanShowAdicionaXisModal(true)}
        updateXis={() => handleActions(ActionMode.ATUALIZAR)}
      />

      <div className="Home__container">
        <XisLista
         mode={modoAtual} 
        xisCriado={xisParaAdicionar}
        deleteXis={handleDeleteXis}
        updateXis={handleUpdateXis}
        xisEditado={xisEditado} />

        {canShowAdicionaXisModal && (
          <AdicionaEditaXisModal
             mode={modoAtual}
            xisToUpdate={xisParaEditar}
            closeModal={handleCloseModal}
            onCreateXis={(xis) => setXisParaAdicionar(xis)}
            onUpdateXis={(xis) => setXisEditado(xis)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
