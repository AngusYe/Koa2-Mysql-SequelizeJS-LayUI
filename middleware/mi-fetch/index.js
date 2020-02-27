const fetch = require('node-fetch')
const config = require('../../config')


    //错误统一处理
    function handleResponse (response) {
        let contentType = response.headers.get('content-type')
        if (contentType.includes('application/json')) {
            return handleJSONResponse(response)
        } else if (contentType.includes('text/html')) {
            return handleTextResponse(response)
        } else {
        // Other response types as necessary. I haven't found a need for them yet though.
            throw new Error(`Sorry, content-type ${contentType} not supported`)
        }
    }
  
    function handleJSONResponse (response) {
        return response.json()
        .then(json => {
            if (response.ok) {
                return json
            } else {
                return Promise.reject(Object.assign({}, json, {
                    status: response.status,
                    statusText: response.statusText
                }))
            }
        })
    }
    function handleTextResponse (response) {
        return response.text()
        .then(text => {
            console.log(response)
            if (response.ok) {
                return text
            } else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText,
                    err: text
                })
            }
        })
    }

class Ajax {
    
    get(url){
        return new Promise((resolve, reject) => {
            fetch(config.base_url+url)
              .then(handleResponse)
              .then(data => resolve(data))
              .catch(err => reject(err))
            })
    }

    post(url,data){
        return new Promise((resolve, reject) => {
            fetch(config.base_url+url, {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(data)
              })
              .then(handleResponse)
              .then(data => resolve(data))
              .catch(err => reject(err))
       
            })
    }
}

module.exports = new Ajax()