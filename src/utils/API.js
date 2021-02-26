import axios from 'axios';

const api = "https://randomuser.me/api/?results=50&nat=us"

export default {
    // get all employees
    getNameList: function() {
        return axios.get(api)
    },
    // get first name of employee
    getNameOfEmployee: function() {
        return axios.get(api)
    },

}