/**
 * Created by ramos on 22/09/15.
 */
var path = require('path');

var constants = {

    incomingFolder: path.join(__dirname, '../../files/personagens/'),
    processedFolder: path.join(__dirname, '../../files/processed/'),
    regexJsonExtension: /(.*\.json)$/

};
Object.freeze(constants);

module.exports = constants;