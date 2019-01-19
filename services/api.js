import axios from 'axios';

const username = 'codetest1';
const password = 'codetest100';

export const apiGetItems = (url) => {
    const basicAuth = 'Basic ' + btoa(username + ':' + password); // 'Basic Y29kZXRlc3QxOmNvZGV0ZXN0MTAw'
    
    return axios({
        url: 'https://app.qudini.com/api/queue/gj9fs',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': basicAuth,
            'Access-Control-Allow-Origin': '*'
         }
      })
      .then(data => alert(data))
      .catch(error => alert(error))

    // return axios.get(url, {headers: {Authorization : basicAuth}})
}

export const apiPostItems = (url, body) => {
    return axios.post(url, body);
    // const basicAuth = 'Basic ' + btoa(username + ':' + password);
    // return axios.post(url, basicAuth);
}


