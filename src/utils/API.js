import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=36";


const API = {
  getEmployeeList: function() {

    return axios.get( BASEURL );
    
  }
  
};

export default API;
