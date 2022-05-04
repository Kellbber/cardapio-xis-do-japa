import "./XisListaItem.css";
import { ActionMode } from "constants/index";

function XisListaItem({xis, quantidadeSelecionada, index, onRemove, onAdd, clickItem, mode}) {

  
	
    
  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button disabled={mode !== ActionMode.NORMAL} className="Acoes__remover" onClick={(e,) => {e.stopPropagation();onRemove(index);}}>
        remover
      </button>
    );

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="XisListaItem__badge">
        {" "}
        {quantidadeSelecionada}{" "}
      </span>
    );

    const badgeAction = (canRender) => {
      if (canRender) return (<span className="XisListaItem__tag"> { mode } </span>);
    }
  
  return (
    <div className={`XisListaItem ${mode !== ActionMode.NORMAL && 'XisListaItem--disable'}`} onClick={()=>clickItem(xis.id)}>
      {badgeCounter(quantidadeSelecionada, index)}
      {badgeAction(mode !== ActionMode.NORMAL)}
      <div>
        <div className="XisListaItem__titulo"> {xis.titulo} </div>
        <div className="XisListaItem__preco">
          {" "}
          R$ {xis.preco.toFixed(2)}{" "}
        </div>
        <div className="XisListaItem__descricao"> {xis.descricao} </div>
        <div className="XisListaItem__acoes Acoes">
          <button
            disabled={mode !== ActionMode.NORMAL}
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={(e) => {e.stopPropagation();onAdd(index);}}
          >
            adicionar
          </button>
          {removeButton(quantidadeSelecionada, index)}
        </div>
      </div>
      <img
        className="XisListaItem__foto"
        src={xis.foto}
        alt={`${xis.sabor}`}
      />
    </div>
  );
}

export default XisListaItem;
