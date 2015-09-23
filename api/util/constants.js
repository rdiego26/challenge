/**
 * Created by ramos on 23/09/15.
 */
var constants = {

    app: {
        name: 'rastreabilidadeBrasilAPI'
    },

    header: {
        jsonAndXML: 'application/json;text/xml;charset=UTF-8;'
    },

    server: {
        port: '10210'
    },

    error: {
        generic: {error:'An error occurred while processing'}
    },

    db: {
        connectionStr: 'mongodb://localhost:27017/rastreabilidade_brasil'

    }

};

Object.freeze(constants);

module.exports = constants;