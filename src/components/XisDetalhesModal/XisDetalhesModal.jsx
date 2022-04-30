import "./XisDetalhesModal.css";



function XisDetalhesModal({xis}) {

console.log(xis)

  return (
 
      <div className="XisDetalhesModal">
        <div>
          <div className="XisDetalhesModal__titulo">{xis.titulo}</div>
          <div className="XisDetalhesModal__preco">R$ {Number(xis.preco).toFixed(2)}</div>
          <div className="XisDetalhesModal__descricao"><b>Sabor: {xis.sabor}</b></div>
          <div className="XisDetalhesModal__descricao"><b>Descrição: {xis.descricao}</b></div>
        </div>
        <img src={xis.foto} alt={xis.sabor} className="XisDetalhesModal__foto" />
      </div>
   
  );
}

export default XisDetalhesModal;
