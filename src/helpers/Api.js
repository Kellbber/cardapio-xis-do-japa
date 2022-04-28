const XisContext = {
    xisEndpoint: () => `${Api.baseUrl}/xis`,
    xisLista: () => `${XisContext.paletaEndpoint()}/all-xis`,
    xisById: (id) => `${XisContext.paletaEndpoint()}/one-xis/${id}`,
    createXis: () => `${XisContext.paletaEndpoint()}/create-xis`,
    updateXisById: (id) => `${XisContext.paletaEndpoint()}/update-xis/${id}`,
    deleteXisById: (id) => `${XisContext.paletaEndpoint()}/delete-xis/${id}`,
  };
  
  export const Api = {
    baseUrl: "https://api-xis-do-japa.onrender.com",
    ...XisContext,
  };