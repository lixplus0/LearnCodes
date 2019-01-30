const fs = require('fs');

let lines = fs.readFileSync('./name.txt', 'utf8').split('\r\n');
let pathfiles = fs.readdirSync('./');
for (let fileindex = 0; fileindex < pathfiles.length - 1; fileindex++) {
    let fileorder = pathfiles[fileindex].split('.')[0];
    for (let index = 0; index < lines.length - 1; index++) {
        let nameorder = lines[index].split('\t')[0];
        if (fileorder == nameorder) {
            let newname = (lines[index].split('\t')[1] + '-' + lines[index].split('\t')[2] + '-' + lines[index].split('\t')[3]);
            // console.log(`./${pathfiles[fileindex]}`,`./${newname}.mp4`);
            fs.rename(`./${pathfiles[fileindex]}`, `./${newname}.mp4`, function (err) {
                if (err) {
                    throw err;
                }
                console.log('done!');
            });
            break;
        }

    }

}
