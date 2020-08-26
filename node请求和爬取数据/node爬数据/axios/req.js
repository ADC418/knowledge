var axios = require("axios");
console.log(axios);
var url = "https://www.100xw.cn/html/jiufanggaizao/index.html"
axios.get(url, {}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})