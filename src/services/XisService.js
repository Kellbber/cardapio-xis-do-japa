import { Api } from "helpers/Api";


const parseResponse = (response) => response.json();

const transformXis = (xis) =>{
    const sabor  = xis.sabor;

    return {
      ...xis,
      id: xis._id,
      titulo: xis.sabor,
      sabor,
     
    };
}
const parseTransformLista = (response) =>
  parseResponse(response).then((xis) => xis.map(transformXis));

const parseTransformItem = (response) =>
  parseResponse(response).then(transformXis);

export const XisService = {

    getLista: () =>
    fetch(Api.xisLista(), { method: "GET" }).then(parseTransformLista),
  getById: (id) =>
    fetch(Api.xisById(id), { method: "GET" }).then(parseTransformItem),
  create: () =>
    fetch(Api.createXis(), { method: "POST" }).then(parseResponse),
  updtateById: (id) =>
    fetch(Api.updateXisById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteXisById(id), { method: "DELETE" }).then(parseResponse),
}