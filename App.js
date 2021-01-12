var axios = require('axios');
module.exports = (url,time) => {
setInterval(() => {
    axios.get(url)
},time*60*1000)
}