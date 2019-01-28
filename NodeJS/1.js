const mysql = require('mysql');

var db = mysql.createConnection({ host: "localhost", user: 'root', password: 'lixAdmin', database: '20190128' });

db.query("SELECT * FROM `user_table`", (err, data) => {
    if (err)
        console.log('失败了');
    else
        console.log('成功了');
    console.log(JSON.stringify(data));
});