const util = require('util');
const fs = require('fs');
const readfile2 = util.promisify(fs.readFile);

async function main () {
    console.log('start')
    const file1Pr = readfile2('./test.txt') // Promise
    const file2Pr = readfile2('./test2.txt') // Promise
    const results = await Promise.all([file1Pr, file2Pr])
    console.log(results.map(s => s.toString()))
}
main()

