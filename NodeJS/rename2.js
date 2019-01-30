const fs = require('fs');

let pathfiles = fs.readdirSync('./');
let re1=/年.+《/;
let re2=/》.+/;
let re3=/》.+/;
for (let fileindex = 0; fileindex < pathfiles.length - 1; fileindex++) {
    let file = pathfiles[fileindex].toString();
    let newfile=file.replace(re1,'-').replace(re2,'')+'.mp4';
    console.log(newfile);
    fs.rename(`./${file}`,`./${newfile}`,function (err) {
    });

}
