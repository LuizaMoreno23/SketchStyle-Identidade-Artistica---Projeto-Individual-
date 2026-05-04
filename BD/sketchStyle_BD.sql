CREATE DATABASE sketchstyle;

USE sketchstyle;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL
);

CREATE TABLE tentativaQuiz (
    idTentativa INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    pontosRealismo INT,
    pontosManga INT,
    pontosCartoon INT,
    pontosMinimalismo INT,
    pontosUrbano INT,
    estiloVencedor VARCHAR(45),
    dtHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fkUsuarioQuiz FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);
