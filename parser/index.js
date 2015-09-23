/**
 * Created by ramos on 22/09/15.
 */
var path = require('path'),
    constants = require( path.join(__dirname, '/util/constants')),
    processor = require( path.join(__dirname, '/util/processor')),
    hound = require('hound'),
    watcher = hound.watch( constants.incomingFolder );

console.log('Monitoring ' + constants.incomingFolder + ' ...');

//First run to process pre-existing files
processor.run();

watcher.on('create', function(file, stats) {
        processor.run();
});