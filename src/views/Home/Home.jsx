import XisLista from "components/XisLista/XisLista";
import Navbar from "components/Navbar/Navbar";

import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__container">
        <XisLista />
      </div>
    </div>
  );
}

export default Home;
