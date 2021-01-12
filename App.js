var axios = require('axios');
module.exports = (url,time) => {
setInterval(() => {
axios.get(url)
console.log('yeah')
},time*60*1000)
}