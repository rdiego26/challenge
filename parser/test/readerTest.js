/**
 * Created by ramos on 22/09/15.
 */
var constants = require('../util/constants'),
    jsonfile = require('jsonfile'),
    walk = require('walk');

describe('Read File Module', function() {

    describe('Reading File', function() {

        it('Attempt read correct directory files', function(done) {
            var _success = true,
                walker = walk.walk(constants.incomingFolder, {followLinks: false});

            walker.on('file', function(root, stat, next) {
                next();
            });

            walker.on("errors", function (root, nodeStatsArray, next) {
                _success = false;
                next();
            });

            walker.on('end', function() {
            });

            if(_success)
                done();

        });

        it('Attempt read correct file and validate if JSON content', function(done) {
            var _success = true,
                _jsonContent = null,
                walker = walk.walk(constants.incomingFolder, {followLinks: false});

            walker.on('file', function(root, stat, next) {
                if(_jsonContent == null)
                    _jsonContent = readFileSync(root + stat.name);
                next();
            });

            walker.on("errors", function (root, nodeStatsArray, next) {
                _success = false;
                next();
            });

            walker.on('end', function() {

                try {
                    JSON.parse(_jsonContent);
                } catch (e) {
                    _success = false;
                }

            });

            if(_success)
                done();

        });

    });

});