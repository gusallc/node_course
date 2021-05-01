const { createFile } = require("./helpers/multiplication")
const { readFile } = require("./read-sync")

console.clear()

const number = 9

//First method
// createFile(base)
//     .then(nameFile => readFile(nameFile))
//     .then(response => console.log(response, "finished load"))
//     .catch(error => console.log(error))

//Second method
const createAndReadFile = async (base) => {
        const write = await createFile(base)
        const read = await readFile(write);
        return read;
}

createAndReadFile(number)
    .then((response) => console.log(response, '\nfinished load'))
    .catch(error => console.log('AN ERROR HAS OCURRED ', error))