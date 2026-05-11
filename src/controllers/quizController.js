var quizModel = require("../models/quizModel");

function listar(req, res) {
    quizModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var pRealismo = req.body.realismoServer;
    var pManga = req.body.mangaServer;
    var pCartoon = req.body.cartoonServer;
    var pMinimalismo = req.body.minimalismoServer;
    var pUrbano = req.body.urbanoServer;
    var estiloVencedor = req.body.vencedorServer;

    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    }

    quizModel.cadastrar(idUsuario, pRealismo, pManga, pCartoon, pMinimalismo, pUrbano, estiloVencedor)
      .then(function(resposta){
        res.status(200).send("Tentativa de quiz cadastrada com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}