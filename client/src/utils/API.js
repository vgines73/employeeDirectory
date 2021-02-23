import axios from 'axios';

const api = "https://randomuser.me/api/?results=15&nat=us"

export default {
    getNameList: function() {
        return axios.get(api)
    },
    getNameOfEmployee: function() {
        return axios.get(api)
    },

}