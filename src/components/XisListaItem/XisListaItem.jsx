import "./XisListaItem.css";
import {useState} from "react";

function XisListaItem({ xis}) {
  const [quantidade, setQuantidade] = useState(0);


  function addQuantidade() {
    setQuantidade(quantidade+1)
  }
  function removeQuantidade() {
    setQuantidade(quantidade-1)
  }
  
  return (
    <div className="XisListaItem ">


      {quantidade>0 && <span className="XisListaItem__badge"> {quantidade} </span>}
      <div>
        <div className="XisListaItem__titulo">{xis.titulo}</div>
        <div className="XisListaItem__preco">{xis.preco.toFixed(2)}</div>
        <div className="XisListaItem__descricao">{xis.descricao}</div>
        <div className="XisListaItem__acoes Acoes">
      
          <button onClick={addQuantidade} className={quantidade==0 ? "Acoes__adicionar" : "Acoes__adicionar Acoes__adicionar--preencher"}>ADICIONAR</button>
          {quantidade>0 && <button className="Acoes__remover" onClick={removeQuantidade}>REMOVER</button> }
        </div>
      </div>
      <img
        className="XisListaItem__foto"
        src={xis.foto}
        alt={`Xis de ${xis.sabor}`}
      />
    </div>
  );
}

export default XisListaItem;
