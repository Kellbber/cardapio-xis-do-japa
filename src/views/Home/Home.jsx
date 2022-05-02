import "./Home.css";
import XisLista from "components/XisLista/XisLista";
import AdicionaXisModal from "components/AdicionaXisModal/AdicionaXisModal";
import Navbar from "components/Navbar/Navbar";

import { useState } from "react";

function Home() {
  const [canShowAdicionaXisModal, setCanShowAdicionaXisModal] = useState(false);

  return (
    <div className="Home">
      <Navbar createXis={() => setCanShowAdicionaXisModal(true)} />

      <div className="Home__container">
        <XisLista />

        {canShowAdicionaXisModal && (
          <AdicionaXisModal
            closeModal={() => setCanShowAdicionaXisModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
