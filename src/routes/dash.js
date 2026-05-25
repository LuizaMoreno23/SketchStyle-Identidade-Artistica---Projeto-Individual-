var express = require("express");
var router = express.Router();

// Importando o controller 
var dashController = require("../controllers/dashController");

// Rota para o Radar 
router.get("/ultima/:idUsuario", function (req, res) {
    dashController.buscarUltimaTentativa(req, res);
});

//Rota para a KPI Jornada (Total acumulado do usuário)
router.get("/jornada/:idUsuario", function (req, res) {
    dashController.buscarTotalAcumulado(req, res);
});

//Rota para a Pizza (Dados gerais da Comunidade)
router.get("/comunidade", function (req, res) {
    dashController.buscarDadosComunidade(req, res);
});

//Rota para a KPI Alta (O que mais teve hoje no sistema)
router.get("/alta-hoje", function (req, res) {
    dashController.buscarEstiloAltaHoje(req, res);
});

module.exports = router;