const axios = require("axios");
function generateFullUrl() {
    const domain = 'guests-data.herokuapp.com';
    const http = process.env.NODE_ENV === "production" ? "https" : "http";

    return `${http}://${domain}`;
}
export const api = axios.create({
    baseURL: generateFullUrl()
});

export const GetData = api.get('/y').then(res =>{
    console.log(res.data)
    return res.data
}).catch(err =>{
    console.log(err);
})
export const SendData = api.post('/y')

const apis = {GetData, SendData, api};
export default apis;