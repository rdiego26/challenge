/**
 * Created by ramos on 22/09/15.
 */
var path = require('path'),
    walk = require('walk'),
    fs = require('fs'),
    constants = require( path.join(__dirname, '/constants')),
    jsonfile = require('jsonfile'),
    json2xml = require('json2xml');

var processor = {

    /**
     * Check for files to process
     */
    run: function() {

        console.time('processFiles');

        //var walker = walk.walk('files/personagens/', {followLinks: false});
        var walker = walk.walk(constants.incomingFolder, {followLinks: false});

        console.log('Init process');

        walker.on('file', function(root, stat, next) {

            if(constants.regexJsonExtension.test(stat.name)) {
                console.log('Init process');

                var _jsonContent = null,
                    _xmlContent = null;

                console.log('File: ' + root + stat.name);

                _jsonContent = jsonfile.readFileSync(root + stat.name);
                _xmlContent = json2xml(_jsonContent);

                //console.dir(_jsonContent);
                console.dir(_xmlContent);
                fs.renameSync( root + stat.name, constants.processedFolder + stat.name);

            }

            next();
        });

        walker.on('end', function() {
            console.timeEnd('processFiles');
            console.log('------------------------------------');
        });

    }


};

module.exports = processor;