import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();


export const XisService = {
    getLista: () =>
    fetch(Api.xisLista(),{method: "GET"}).then(parseResponse),

    getById: (id) =>
    fetch(Api.xisById(id), {method: "GET"}).then(parseResponse),

    create: () =>
    fetch(Api.createXis(), {method: "POST"}).then(parseResponse),

    updateById: (id) =>
    fetch(Api.updateXisById(id), {method: "PUT"}).then(parseResponse),

    deleteById: (id) =>
    fetch(Api.deleteXisById(id), {method: "DELETE"}).then(parseResponse),

}