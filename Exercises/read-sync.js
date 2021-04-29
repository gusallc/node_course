const { readFileSync } = require("fs");

module.exports.readFile = async (url) => {

    try {
        let reading = readFileSync(url, 'utf8')
        return reading
    } catch (error) {
        throw error
    }

}
