const yargs = require("yargs")
    //configuration alias -b and --base
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Is the basis of the multiplication table'

    })
    .check((yargs, options) => {
        console.log('yargs', yargs);
        if (isNaN(yargs.b)) {
            throw 'The base is required'
        }
        return true;
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'display the table on the console'
    })
    .argv;

module.exports = yargs;