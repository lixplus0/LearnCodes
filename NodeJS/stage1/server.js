const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

var users = {};
http.createServer(function (req, res) {
    var str = '';
    req.on('data', function (data) {
        str += data;
    });
    req.on('end', function () {
        var obj = urlLib.parse(req.url, true);
        var url = obj.pathname;
        var GET = obj.query;
        var POST = querystring.parse(str);
        if (url == '/user') {
            // 访问接口
            switch (GET.act) {
                case 'reg':
                    if (users[GET.user]) {
                        res.write("{'ok':false,'msg':'此用户已存在'}");
                    } else {
                        users[GET.user] = GET.pass;
                        res.write("{'ok':true,'msg':'注册成功'}");
                    }
                    break;
                case 'login':
                    if (!user[GET.user]) {
                        res.write("{'ok':false,'msg':'此用户不存在'}");
                    } else if (user[GET.user] != GET.pass) {
                        res.write("{'ok':false,'msg':'用户名或密码错误'}");
                    } else {
                        res.write("{'ok':true,'msg':'登陆成功'}");

                    }
                    break;
                default:
                    res.write("{'ok':false,'msg':'未知的act'}");
            }
            res.end();
        } else {
            // 读取文件
            var file_name = './www' + url;
            fs.readFile(file_name, function (err, data) {
                if (err) {
                    res.write('404');
                } else {
                    res.write(data);
                }

            });
        }

        res.end();
    })


}).listen(8080);