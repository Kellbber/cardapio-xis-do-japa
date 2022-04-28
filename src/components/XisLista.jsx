import './XisLista.css';
import {xis} from "../mocks/xis.js";
function XisLista (){
    return <div className="XisLista">
        {xis.map((xis, index) => (
        <div className="XisListaItem " key={`XisListaItem-${index}`}>
            <div>
                <div className="XisListaItem__titulo">{xis.titulo}</div>
                <div className="XisListaItem__preco">{xis.preco.toFixed(2)}</div>
                <div className="XisListaItem__descricao">{xis.descricao}</div>
                <div className="XisListaItem__acoes Acoes"><button className="Acoes__adicionar Acoes__adicionar--preencher">ADICIONAR</button></div>
            </div>
            <img  className="XisListaItem__foto" src={xis.foto}alt={`Xis de ${xis.sabor}`}/>
        </div>
        ))}
         </div>
}

export default XisLista;