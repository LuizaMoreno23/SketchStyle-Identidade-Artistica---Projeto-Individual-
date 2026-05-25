var database = require("../database/config");

var database = require("../database/config");

//KPI JORNADA
function buscarTotalAcumulado(idUsuario) {
    var instrucaoSql = `
        SELECT 
            SUM(pontosRealismo) as totalRealismo,
            SUM(pontosManga) as totalManga,
            SUM(pontosCartoon) as totalCartoon, 
            SUM(pontosMinimalismo) as totalMinimalismo, 
            SUM(pontosUrbano) as totalUrbano,
        CASE 
            WHEN SUM(pontosRealismo) >= SUM(pontosManga) AND SUM(pontosRealismo) >= SUM(pontosCartoon) AND SUM(pontosRealismo) >= SUM(pontosMinimalismo) AND SUM(pontosRealismo) >= SUM(pontosUrbano) AND SUM(pontosRealismo) > 0 THEN 'Realismo'
            WHEN SUM(pontosManga) >= SUM(pontosCartoon) AND SUM(pontosManga) >= SUM(pontosMinimalismo) AND SUM(pontosManga) >= SUM(pontosUrbano) AND SUM(pontosManga) > 0 THEN 'Mangá'
            WHEN SUM(pontosCartoon) >= SUM(pontosMinimalismo) AND SUM(pontosCartoon) >= SUM(pontosUrbano) AND SUM(pontosCartoon) > 0 THEN 'Cartoon'
            WHEN SUM(pontosMinimalismo) >= SUM(pontosUrbano) AND SUM(pontosMinimalismo) > 0 THEN 'Minimalismo'
            WHEN SUM(pontosUrbano) > 0 THEN 'Urbano'
            ELSE 'Nenhum' END AS vencedorJornada
        FROM tentativaQuiz
        WHERE fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

//KPI ALTA HOJE
function buscarEstiloAltaHoje() {
    var instrucaoSql = `
        SELECT estiloVencedor AS estiloEmAlta, COUNT(estiloVencedor) AS contagem
        FROM tentativaQuiz
        WHERE DATE(dtHora) = CURDATE()
        GROUP BY estiloVencedor
        ORDER BY contagem DESC
        LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

//RADAR  
function buscarUltimaTentativa(idUsuario) {
    var instrucaoSql = `
        SELECT pontosRealismo, pontosManga, pontosCartoon, pontosMinimalismo, pontosUrbano          
        FROM tentativaQuiz 
        WHERE fkUsuario = ${idUsuario} ORDER BY idTentativa DESC LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

//PIZZA 
function buscarDadosComunidade() {
    var instrucaoSql = `
       SELECT 
            SUM(pontosRealismo) AS GeralRealismo,
            SUM(pontosManga) AS GeralManga,
            SUM(pontosCartoon) AS GeralCartoon,
            SUM(pontosMinimalismo) AS GeralMinimalismo,
            SUM(pontosUrbano) AS GeralUrbano
        FROM tentativaQuiz;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimaTentativa,
    buscarTotalAcumulado,
    buscarDadosComunidade,
    buscarEstiloAltaHoje
};