const XisContext = {
    xisEndpoint: () => `${Api.baseUrl}/xis`,
    xisLista: () => `${XisContext.xisEndpoint()}/all-xis`,
    xisById: (id) => `${XisContext.xisEndpoint()}/one-xis/${id}`,
    createXis: () => `${XisContext.xisEndpoint()}/create-xis`,
    updateXisById: (id) => `${XisContext.xisEndpoint()}/update-xis/${id}`,
    deleteXisById: (id) => `${XisContext.xisEndpoint()}/delete-xis/${id}`,
  };
  
  export const Api = {
    baseUrl: "https://api-xis-do-japa.onrender.com",
    ...XisContext,
  };