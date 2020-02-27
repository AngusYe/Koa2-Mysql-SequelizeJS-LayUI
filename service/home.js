const Ajax = require('../middleware/mi-fetch')
module.exports = {

  //全局信息
  overAllData: async function () {
    let data
    await Ajax.get('/api/baseinfo')
      .then(res => {
        data = res
      })
      .catch(error => Promise.reject(error));
    return data
  },
  aboutUs: async function (resData) {
    let data
    await Ajax.post('/api/aboutinfo',resData)
      .then(res => {
        data = res
      })
      .catch(error => Promise.reject(error));
    return data
  },
  newsList: async function (resData) {
    let data
    await Ajax.post('/api/articlelist',resData)
      .then(res => {
        data = res
      })
      .catch(error => Promise.reject(error));
    return data
  },
  newsdetail: async function (resData) {
    let data
    await Ajax.post('/api/articleinfo',resData)
      .then(res => {
        data = res
      })
      .catch(error => Promise.reject(error));
    return data
  },
  proserise: async function (resData) {
    let data
    await Ajax.post('/api/seriselist',resData)
      .then(res => {
        data = res
      })
      .catch(error => Promise.reject(error));
    return data
  },
  getProcuct : async function (resData) {
    let data
    await Ajax.post('/api/productlist',resData)
      .then(res => {
        data = res
      })
      .catch(error => Promise.reject(error));
    return data
  },
  getProcuctCase : async function (resData) {
    let data
    await Ajax.post('/api/productinfo',resData)
      .then(res => {
        data = res
      })
      .catch(error => Promise.reject(error));
    return data
  },
  getProcuctFront : async function (resData) {
    let data
    await Ajax.post('/api/productfront',resData)
      .then(res => {
        data = res
      })
      .catch(error => Promise.reject(error));
    return data
  }
} 