import "./Home.css";
import XisLista from "components/XisLista/XisLista";
import AdicionaEditaXisModal from "components/AdicionaEditaXisModal/AdicionaEditaXisModal";
import Navbar from "components/Navbar/Navbar";

import { ActionMode } from "constants/index";

import { useState } from "react";

function Home() {
  const [canShowAdicionaXisModal, setCanShowAdicionaXisModal] = useState(false);

  const [xisParaAdicionar, setXisParaAdicionar] = useState();

  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const handleActions = (action) => {
    const novaAcao = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(novaAcao);
  };

  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        createXis={() => setCanShowAdicionaXisModal(true)}
        updateXis={() => handleActions(ActionMode.ATUALIZAR)}
      />

      <div className="Home__container">
        <XisLista xisCriado={xisParaAdicionar} />

        {canShowAdicionaXisModal && (
          <AdicionaEditaXisModal
            closeModal={() => setCanShowAdicionaXisModal(false)}
            onCreateXis={(xis) => setXisParaAdicionar(xis)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
