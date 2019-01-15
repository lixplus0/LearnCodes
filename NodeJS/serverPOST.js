const http=require('http');
const querystring=require('querystring');

http.createServer(function(req,res){
    var str='';
    var i=0;
    req.on('data',function (data) {
        console.log(i++);
        str+=data;
    });
    req.on('end',function () {
        var POST=querystring.parse(str);
        console.log(str);
        console.log(POST);
    });
}).listen(8080);