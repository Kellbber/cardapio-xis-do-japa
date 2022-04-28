import "./XisListaItem.css";

function XisListaItem({ xis, quantidadeSelecionada, index, onRemove, onAdd }) {


  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="XisListaItem__badge"> {quantidadeSelecionada} </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => onRemove(index)}>
        REMOVER
      </button>
    );
  return (
    <div className="XisListaItem ">
      {badgeCounter(quantidadeSelecionada, index)}
      <div>
        <div className="XisListaItem__titulo">{xis.titulo}</div>
        <div className="XisListaItem__preco">{xis.preco.toFixed(2)}</div>
        <div className="XisListaItem__descricao">{xis.descricao}</div>
        <div className="XisListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !quantidadeSelecionada && "Acoes__adicionar--preencher"
            }`}
            onClick={() => onAdd(index)}
          >
            ADICIONAR
          </button>
          {removeButton(quantidadeSelecionada, index)}
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
