const { writeFileSync } = require("fs")

const createFile = async (base) => {

    try {

        let output = ''
        output +=('===================================\n');
        output +=('   MULTIPLICATION TABLE   '+ base +'\n');
        output +=('===================================\n');

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