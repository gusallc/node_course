const yargs = require("../config/yargs")
const { createFile } = require("./helpers/multiplication")
const { readFile } = require("./read-sync")

//input command =>
// base with alias -b or --b, type =>number
// show list with alias -l  , type=> boolean, default => false


const base = yargs.base

const createAndReadFile = async (num) => {
    const write = await createFile(num)
    if (yargs.l) {
        const read = await readFile(write);
        return read;
    }
    return write;
}

createAndReadFile(base)
    .then((response) => console.log(response, '\nfinished load'))
    .catch(error => console.log('AN ERROR HAS OCURRED ', error))