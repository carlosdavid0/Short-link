import axios from "axios";


export default axios.create({
    baseURL: "http://172.16.3.28:3333/api",
})