import { ActionMode } from "constants/index";
import "./Navbar.css";
import sacola from "assets/icons/sacola.png";
import logo from "assets/logo.png";
import xis from "assets/icons/xis.svg";
import update from "assets/icons/update.svg";
import icondelete from "assets/icons/delete.svg";

function Navbar({ createXis, updateXis, mode, deleteXis }) {
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo El Geladon"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> Xis do Japa </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <button
            type="button"
            className={`Opcoes__xis Xis ${
              mode === ActionMode.ATUALIZAR && "Xis--ativo"
            }`}
            onClick={() => updateXis()}
          >
            <img
              src={update}
              width="40px"
              className="Xis__icone"
              alt="Atualizar xis"
            />
          </button>
          <button
            type="button"
            className={`Opcoes__xis Xis ${
              mode === ActionMode.DELETAR && "Xis--deletar"
            }`}
            onClick={() => deleteXis()}
          >
            <img
              src={icondelete}
              width="40px"
              className="Xis__icone"
              alt="Deletar xis"
            />
          </button>
          <button
            type="button"
            className="Opcoes__xis Xis"
            onClick={() => createXis()}
          >
            <img
              src={xis}
              width="40px"
              className="Xis__icone"
              alt="Adiconar xis"
            />
          </button>
          <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="70px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
