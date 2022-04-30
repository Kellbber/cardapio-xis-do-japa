import "./Navbar.css"

import sacola from "assets/icons/sacola.png";
import logo from "assets/logo.jpg";

function Navbar(){
    return (
        <div className="Home__header Header">
        <div className="row">
          <div className="Header__logo Logo">
            <img
              src={logo}
              width="65px"
              alt="Logo Xis do Japa"
              className="Logo__icone"
            />
            <span className="Logo__titulo"> Xis do Japa </span>
          </div>
          <div className="Header__opcoes Opcoes">
            <div className="Opcoes__sacola Sacola">
              <img
                src={sacola}
                width="40px"
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