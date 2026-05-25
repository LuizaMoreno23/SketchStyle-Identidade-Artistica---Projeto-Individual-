var dashModel = require("../models/dashModel");


//KPI JORNADA
function buscarTotalAcumulado(req, res) {
    var idUsuario = req.params.idUsuario;

    dashModel.buscarTotalAcumulado(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

//KPI ALTA
function buscarEstiloAltaHoje(req, res) {
    dashModel.buscarEstiloAltaHoje().then(function (resultado) {
    if (resultado.length > 0) {
        res.status(200).json(resultado[0]); 
    } else {
        res.status(200).json({ estiloEmAlta: 'Nenhum' });
    }
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}


//PIZZA
function buscarDadosComunidade(req, res) {
    dashModel.buscarDadosComunidade().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

// 1. RADAR: Última tentativa (DNA Artístico)
function buscarUltimaTentativa(req, res) {
    var idUsuario = req.params.idUsuario;

    dashModel.buscarUltimaTentativa(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado[0]); // Retorna o objeto com os pontos
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    buscarUltimaTentativa,
    buscarTotalAcumulado,
    buscarDadosComunidade,
    buscarEstiloAltaHoje
};