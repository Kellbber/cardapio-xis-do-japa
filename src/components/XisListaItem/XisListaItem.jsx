import "./XisListaItem.css";

function XisListaItem() {
    const removerItem = (i) => console.log('remover'+i);
    const adicionarItem = (i) => console.log('adicionar'+i);
    const xisSelecionado = [0];
    const index = 0
    const xis ={
        titulo: "Açai com Leite Condenado",
        descricao: "Batman usa calcinha",
        foto: require("assets/images/acai-com-leite-condensado.png"),
        preco: 10.0,
        sabor: "Açai",
        recheio: "Leite Condenado",
        possuiRecheio: true,
    };
    

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="XisListaItem__badge"> {xisSelecionado[index]} </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button className="Acoes__remover" onClick={() => removerItem(index)}>
        REMOVER
      </button>
    );
  return (
    <div className="XisListaItem ">
      {badgeCounter(xisSelecionado[index], index)}
      <div>
        <div className="XisListaItem__titulo">{xis.titulo}</div>
        <div className="XisListaItem__preco">{xis.preco.toFixed(2)}</div>
        <div className="XisListaItem__descricao">{xis.descricao}</div>
        <div className="XisListaItem__acoes Acoes">
          <button
            className={`Acoes__adicionar ${
              !xisSelecionado[index] && "Acoes__adicionar--preencher"
            }`}
            onClick={() => adicionarItem(index)}
          >
            ADICIONAR
          </button>
          {removeButton(xisSelecionado[index], index)}
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
