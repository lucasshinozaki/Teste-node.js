-- CRIANDO UMA TABELA
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

--INSERINDO DADOS NA TABELA
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Lucas Alberto Souza Shinozaki",
    "lucas_shinozaki@hotmail.com",
    22
);
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Vera Lucia de Souza",
    "vera_lucia@hotmail.com",
    50
);
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Alberto Shinozaki",
    "alberto_shinozaki@hotmail.com",
    63
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Regiane Alves",
    "regiane_alves@hotmail.com",
    22
);

--BUSCANDO DADOS NA TABELA 
SELECT * FROM usuarios WHERE idade >= 18
SELECT * FROM usuarios WHERE idade = 22;
SELECT * FROM usuarios WHERE nome = "Lucas Alberto Souza Shinozaki";

--DELETANDO DADOS NO BANCO
DELETE FROM usuarios WHERE nome = "Alberto Shinozaki";

--ATUALIZANDO REGISTRO NO MYSQL
UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Regiane Alves";
