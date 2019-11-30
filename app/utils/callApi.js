import axios from 'axios';

const callApi = (method, endpoint, data)=>{
    return axios({
        method,
        data,
        url: `http://23.99.195.35/api${endpoint}`
    }
    )
};

export default callApi