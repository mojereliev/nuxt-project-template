module.exports = {
  axios: {
    credentials: false,
    baseURL: 'http://m2h.m2hdev.com/api/',
    responseInterceptor: response => {
      let reseponseData = response.data;
      if (reseponseData) {
        reseponseData = JSON.parse(JSON.stringify(reseponseData).replace(/\/uploads/gi, 'http://m2h.m2hdev.com/uploads'));
        response.data = reseponseData;
      }
      return response;
    }
  }
};
