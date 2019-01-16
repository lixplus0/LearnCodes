const urlLib=require('url');

var res=urlLib.parse("http://localhost:8080/?user=1231&pass=111",true);

console.log(res.pathname,res.query);