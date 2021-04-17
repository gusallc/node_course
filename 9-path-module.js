const path = require('path')
console.log(path.sep) //rsp: \

const  filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath); // rsp: \content\subfolder\test.txt

const base = path.basename(filePath)
console.log(base); // rsp: test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);// rsp: D:\Gustavo\Node\Nodej-Practice\content\subfolder\test.txt