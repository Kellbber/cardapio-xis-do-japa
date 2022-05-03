import "./Home.css";
import XisLista from "components/XisLista/XisLista";
import AdicionaEditaXisModal from "components/AdicionaEditaXisModal/AdicionaEditaXisModal";
import Navbar from "components/Navbar/Navbar";

import { useState } from "react";

function Home() {
  const [canShowAdicionaXisModal, setCanShowAdicionaXisModal] = useState(false);

  const [xisParaAdicionar, setXisParaAdicionar] = useState();

  return (
    <div className="Home">
      <Navbar createXis={() => setCanShowAdicionaXisModal(true)} />

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
