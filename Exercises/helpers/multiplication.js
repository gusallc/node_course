const { writeFileSync } = require("fs")

const createFile = async (base) => {

    try {
        console.log('===================================');
        console.log('   MULTIPLICATION TABLE   ', base);
        console.log('===================================');

        let output = ''
        for (let i = 0; i < 10; i++) {
            output += `${base} x ${i} = ${base * i} \n`
        }

        writeFileSync(`./Exercises/table-${base}.txt`, output)

        return (`./Exercises/table-${base}.txt`);
    } catch (error) {
        throw error
    }

}

module.exports = {createFile}