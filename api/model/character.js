/**
 * Created by ramos on 23/09/15.
 */
var connection = require('../util/connection'),
    mongoose = require('mongoose'),
    characterSchema = connection.Schema({
        nome: { type: String, required: true, unique: true },
        sexo: { type: String, required: true},
        idade: { type: Number, required: true},
        cabelo: { type: String, required: true},
        olhos: { type: String, required: true},
        pessoasRelacionadas: {type: mongoose.Schema.Types.Mixed},
        origem: { type: String, required: true},
        atividade: { type: String, required: true},
        voz: { type: String, required: true},
        caracteristicas: { type: [] }
    });


module.exports = connection.model('Character', characterSchema, 'Character');