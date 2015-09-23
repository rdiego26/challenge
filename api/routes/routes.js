/**
 * Created by ramos on 23/09/15.
 */
var express  = require('express'),
    constants = require('../util/constants'),
    xmlparser = require('express-xml-bodyparser'),
    characterModel = require('../model/character');


/* App Configuration */
var app = express();
app.set('port', constants.server.port);
app.set('title', constants.app.name);

/* Include CORS and JSON Type on ALL res's  */
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Content-type', constants.header.jsonAndXML);
    res.removeHeader("X-Powered-By"); //Remove header for safety reasons
    next();
});

//List Chars
app.get( '/character' , function(req, res) {

    characterModel.find({})
        .exec( function(err, docs){
            if(err) res.status(500).end();
            res.end(JSON.stringify(docs));
        });
});

app.post( '/character' , xmlparser({trim: false, explicitArray: false}), function(req, res) {

    var _jsonData = req.body,
        _newCharacter;

    try {
        _newCharacter = new characterModel({
            nome: _jsonData.personagem.nome,
            sexo: _jsonData.personagem.sexo,
            idade: _jsonData.personagem.idade,
            cabelo: _jsonData.personagem.cabelo,
            olhos: _jsonData.personagem.olhos,
            pessoasRelacionadas: _jsonData.personagem.pessoasRelacionadas,
            origem: _jsonData.personagem.origem,
            atividade: _jsonData.personagem.atividade,
            voz: _jsonData.personagem.voz,
            caracteristicas: _jsonData.personagem.caracteristicas
        });

        _newCharacter.save(function(err){
            if(err) res.status(500).end();
            res.end( JSON.stringify(_newCharacter));
        });

    } catch(e) {
        res.status(500).end(e);
    }



});

//DEFAULT ROUTE
app.get( '*' , function(req, res) {
    res.status(404).end();
});

module.exports = app;
