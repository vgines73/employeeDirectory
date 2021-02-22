import axios from 'axios';

const api = "https://randomuser.me/api/"

export default {
    getNameList: function() {
        return axios.get(api)
    },
    getNameOfEmployee: function() {
        return axios.get(api)
    },

}