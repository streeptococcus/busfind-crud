CREATE DATABASE IF NOT EXISTS busfind;
USE busfind;

CREATE TABLE IF NOT EXISTS linhas (
    id_linha INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_linha VARCHAR(200) NOT NULL,
    created_at TIMESTAMP default CURRENT_TIMESTAMP,
    modified_at TIMESTAMP default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS veiculos (
    id_veiculo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_veiculo VARCHAR(200) NOT NULL,
    modelo_veiculo TEXT NOT NULL,
    id_linha_fk INT NOT NULL,
    CONSTRAINT linha_fk FOREIGN KEY (id_linha_fk)
    REFERENCES linhas(id_linha),
    created_at TIMESTAMP default CURRENT_TIMESTAMP,
    modified_at TIMESTAMP default CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS posicao (
    id_posicao INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    lati DOUBLE NOT NULL,
    longi DOUBLE NOT NULL,
    id_veiculo_fk INT NOT NULL,
	created_at TIMESTAMP default CURRENT_TIMESTAMP,
    modified_at TIMESTAMP default CURRENT_TIMESTAMP,
    CONSTRAINT veiculo_fk FOREIGN KEY (id_veiculo_fk) REFERENCES veiculos(id_veiculo)
);

CREATE TABLE IF NOT EXISTS paradas (
    id_parada INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_parada VARCHAR(200) NOT NULL,
    lati DOUBLE NOT NULL,
    longi DOUBLE NOT NULL,
    created_at TIMESTAMP default CURRENT_TIMESTAMP,
    modified_at TIMESTAMP default CURRENT_TIMESTAMP
);

ALTER TABLE linhas ADD id_parada_fk INT NOT NULL;
ALTER TABLE linhas ADD CONSTRAINT parada_fk FOREIGN KEY (id_parada_fk) REFERENCES paradas(id_parada);