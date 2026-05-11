var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM tentativaQuiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar (idUsuario, pRealismo, pManga, pCartoon, pMinimalismo, pUrbano, estiloVencedor){
    var instrucao = `
        INSERT INTO tentativaQuiz (fkUsuario, pontosRealismo, pontosManga, pontosCartoon, pontosMinimalismo, pontosUrbano, estiloVencedor) 
        VALUES (${idUsuario}, ${pRealismo}, ${pManga}, ${pCartoon}, ${pMinimalismo}, ${pUrbano}, '${estiloVencedor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};