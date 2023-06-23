-- DDL

CREATE DATABASE WebCinchos;

USE WebCinchos;

-- Creación de la tabla "Clientes"
CREATE TABLE Clientes (
  idCliente INT NOT NULL IDENTITY(1,1)PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  correo VARCHAR(100) NOT NULL
);

-- Creación de la tabla "Cinchos"
CREATE TABLE Cinchos (
  idCincho INT NOT NULL IDENTITY(1,1)PRIMARY KEY,
  idCliente INT NOT NULL,
  fecha_venta DATE NOT NULL,
  FOREIGN KEY (idCliente) REFERENCES Clientes(idCliente)
);

-- Creación de la tabla "Capas"
CREATE TABLE Capas (
  idCapa INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

-- Creación de la tabla "Detalle_Cincho"
CREATE TABLE Detalle_Cincho (
  idDetalleCincho INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  idCincho INT NOT NULL,
  idCapa INT NOT NULL,
  cantidad INT NOT NULL,
  FOREIGN KEY (idCincho) REFERENCES Cinchos(idCincho),
  FOREIGN KEY (idCapa) REFERENCES Capas(idCapa)
);

