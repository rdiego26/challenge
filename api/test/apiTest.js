/**
 * Created by ramos on 23/09/15.
 */

var request = require('supertest'),
    app = require('../routes/routes'),
    constants = require('../util/constants');

describe('API Module', function() {

    describe('Routes', function() {

        var _url = 'http://localhost:' + constants.server.port + '/nonexistent';

        it('Nonexistent route returns 404', function(done) {
            request(app)
                .get('/nonexistent')
                .expect(404, done);
        });

        it('Existent route returns 200', function(done) {
            request(app)
                .get('/character')
                .expect(200, done);
        });

        it('Create valid character returns 200', function(done) {

            var _xmlCharacter = '<nome>Wendy Testaburger</nome><sexo>Feminino</sexo><idade>10</idade><cabelo>Preto</cabelo><olhos>Pretos</olhos><pessoasRelacionadas><mae>Sra Testaburger</mae><pai>Sr Testaburger</pai><amigos>Token BlackStan Marsh</amigos><inimigos>Eric Theodore Cartman</inimigos></pessoasRelacionadas><origem>South Park, Colorado</origem><atividade>Estudante</atividade><voz>April Stewart</voz><caracteristicas>inteligentepolitizada</caracteristicas>';

            request(app)
                .post('/character', _xmlCharacter)
                .expect(200, done);
        });


    });

});