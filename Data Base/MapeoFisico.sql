CREATE DATABASE CentroClinico;
USE CentroClinico;

CREATE USER 'Usuario'@'%' IDENTIFIED BY 'GrupoCracks';
GRANT ALL PRIVILEGES ON CentroClinico.* TO 'Usuario'@'%';

CREATE TABLE usuario(
	username VARCHAR(20) NOT NULL,
    password VARCHAR(150) NOT NULL,
    fullname VARCHAR(45) NOT NULL,
    rol TINYINT(1) NOT NULL,
	CONSTRAINT PK_USUARIO PRIMARY KEY (username)
);

CREATE TABLE tipo_examen(
	id_tipo_examen INT NOT NULL AUTO_INCREMENT,
    nombre_tipo_examen VARCHAR(45) NOT NULL,
    precio DOUBLE NOT NULL,
    CONSTRAINT PK_TIPO_EXAMEN PRIMARY KEY (id_tipo_examen)
);

CREATE TABLE elemento_examinar(
	id_elemento_examinar INT NOT NULL AUTO_INCREMENT,
    nombre_elemento VARCHAR(45) NOT NULL,
    tipo_examen INT NOT NULL,
    CONSTRAINT PK_ELEMENTO_EXAMINAR PRIMARY KEY (id_elemento_examinar),
    CONSTRAINT FK_TO_TIPO_EXAMEN FOREIGN KEY(tipo_examen) REFERENCES tipo_examen(id_tipo_examen)
);

CREATE TABLE paciente(
	cui CHAR(13) NOT NULL,
    nombre VARCHAR(45) NOT NULL,
    direccion VARCHAR(100) DEFAULT('Ciudad'),
    fecha_nacimiento DATE NOT NULL,
    nit VARCHAR(8) DEFAULT('C/F'),
    telefono CHAR(8) NOT NULL,
    CONSTRAINT PK_PACIENTE PRIMARY KEY (cui)
);

CREATE TABLE medico_recomendado(
	numero_colegiado INT NOT NULL,
    nombre_medico VARCHAR(45) NOT NULL,
    dinero_recaudado DOUBLE DEFAULT(0.00),
	CONSTRAINT PK_MEDICO_RECOMENDADO PRIMARY KEY (numero_colegiado)
);

CREATE TABLE orden(
	numero_orden INT NOT NULL AUTO_INCREMENT,
    total DOUBLE NOT NULL, 
    fecha_consulta DATE NOT NULL,
    fecha_examen DATE,
    estado_orden TINYINT(1) DEFAULT(1) NOT NULL,
    cui_paciente CHAR(13) NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    numero_colegiado_medico INT NOT NULL,
    numeros_serie VARCHAR(244),
    CONSTRAINT PK_ORDEN PRIMARY KEY (numero_orden),
    CONSTRAINT FK_TO_PACIENTE FOREIGN KEY (cui_paciente) REFERENCES paciente(cui),
    CONSTRAINT FK_TO_USUARIO FOREIGN KEY (user_name) REFERENCES usuario(username),
    CONSTRAINT FK_TO_MEDICO_RECOMENDADO FOREIGN KEY (numero_colegiado_medico) REFERENCES medico_recomendado(numero_colegiado)
);

CREATE TABLE resultado(
	id_resultado INT NOT NULL AUTO_INCREMENT,
    nombre_resultado VARCHAR(45) NOT NULL,
	resultado DOUBLE,
    unidades VARCHAR(45),
    rango_referencia_inferior DOUBLE,
    rango_referencia_superior DOUBLE,
    comentario VARCHAR(300),
    CONSTRAINT PK_RESULTADO PRIMARY KEY (id_resultado)
);

CREATE TABLE detalle_orden(
	id_detalle_orden INT NOT NULL AUTO_INCREMENT,
    orden INT NOT NULL,
    precio_venta DOUBLE NOT NULL,
    tipo_examen INT NULL,
    resultado INT NOT NULL,
    CONSTRAINT PK_DETALLE_ORDEN PRIMARY KEY (id_detalle_orden),
    CONSTRAINT FK_TO_ORDEN FOREIGN KEY (orden) REFERENCES orden(numero_orden),
    CONSTRAINT FK_TO_EXAMEN FOREIGN KEY(tipo_examen) REFERENCES tipo_examen(id_tipo_examen),
    CONSTRAINT FK_TO_RESULTADO FOREIGN KEY (resultado) REFERENCES resultado(id_resultado)
);