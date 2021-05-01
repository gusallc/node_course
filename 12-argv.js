const yargs = require("yargs")
    //configuration alias -b and --base
    .option('b', {
        alias: 'base',
        type: 'number'
    })
    //validate 
    .check((yargs, options) => {
        console.log('yargs', yargs);
        if (isNaN(yargs.b)) {
            throw 'The base is required'
        }
        return true;
    })
    .argv;


console.log(yargs);
/*
test1 =>
 command => node app  --base=2
 response =>  
    yargs { _: [], base: 2, b: 2, '$0': 'app' }
    { _: [], base: 2, b: 2, '$0': 'app' }

test2 =>
 command =>   node app --base=abc
 response =>
    yargs { _: [], base: NaN, b: NaN, '$0': 'app' }
     Opciones:
        --help     Muestra ayuda                                        [booleano]
        --version  Muestra número de versión                            [booleano]
    -b, --base                                                            [número]

The base is required

*/

console.log("base: yargs", yargs.base);
// base: yargs 2