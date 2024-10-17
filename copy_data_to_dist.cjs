const fs = require('fs');
const path = require('path');

const copyDir = (src, dest, callback) => {
    const copy = (copySrc, copyDest) => {
        fs.readdir(copySrc, (err, list) => {
            if (err) return callback(err);

            list.forEach((item) => {
                const srcItem = path.resolve(copySrc, item);
                const destItem = path.resolve(copyDest, item);

                fs.stat(srcItem, (err, stat) => {
                    if (err) return callback(err);

                    if (stat.isFile()) {
                        fs.createReadStream(srcItem).pipe(fs.createWriteStream(destItem));
                    } else if (stat.isDirectory()) {
                        fs.mkdirSync(destItem, { recursive: true });
                        copy(srcItem, destItem);
                    }
                });
            });
        });
    };

    fs.access(dest, (err) => {
        if (err) fs.mkdirSync(dest, { recursive: true });
        copy(src, dest);
    });
};

const copyFile = (sourcePath, destinationPath) => {

    if (!fs.existsSync(destinationPath)) {
        fs.mkdirSync(destinationPath, { recursive: true });
    }
    
    const fileName = path.basename(sourcePath);
    const destinationFile = path.join(destinationPath, fileName);
    
    fs.copyFile(sourcePath, destinationFile, (err) => {
        if (err) {
            console.error('Error copying file:', err);
        } else {
            console.log('File copied successfully!');
        }
    });
}

copyDir('./data', './dist/data');
// copyFile('./builder.config.js', './dist/');