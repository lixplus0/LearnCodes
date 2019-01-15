const http = require("http");
const urlLib = require('url');

http.createServer(function (req, res) {
    var obj = urlLib.parse(req.url, true);
    console.log(obj.pathname, obj.query);
    // var GET = {};
    // if(req.url.indexOf('?')!=-1){

    //     var arr = req.url.split('?');
    //     var url=arr[0];
    //     GET=querystring.parse(arr[1]);
    // }else{
    //     var url=req.url;
    // }
    // console.log(url,GET);
    res.write("aaa");
    res.end();
}).listen(8080);