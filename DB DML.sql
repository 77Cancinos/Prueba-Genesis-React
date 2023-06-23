-- DML
USE WebCinchos;

-- Insertar registros en la tabla "Clientes"
INSERT INTO Clientes (nombre, direccion, telefono, correo)
VALUES ('Juan Perez', 'Calle Principal 123', '555-1234', 'juan@example.com');
INSERT INTO Clientes (nombre, direccion, telefono, correo)
VALUES ('Maria Sanchez', 'Avenida Central 456', '555-5678', 'maria@example.com');
INSERT INTO Clientes (nombre, direccion, telefono, correo)
VALUES ('Pedro Ramirez', 'Carrera 7 890', '555-9012', 'pedro@example.com');


SELECT * FROM Clientes;


-- Insertar registros en la tabla "Cinchos"
INSERT INTO Cinchos (idCliente, fecha_venta)
VALUES (1, '2023-06-01');
INSERT INTO Cinchos (idCliente, fecha_venta)
VALUES (2, '2023-06-05');


SELECT * FROM Cinchos


-- Insertar registros en la tabla "Capas"
INSERT INTO Capas (nombre)
VALUES ('Inferior (cuero)');
INSERT INTO Capas (nombre)
VALUES ('Centro (esponja)');
INSERT INTO Capas (nombre)
VALUES ('Superior (cuero)');

SELECT * FROM Capas

-- Insertar registros en la tabla "Detalle_Cincho"
INSERT INTO Detalle_Cincho (idCincho, idCapa, cantidad)
VALUES (1, 1, 5);
INSERT INTO Detalle_Cincho (idCincho, idCapa, cantidad)
VALUES (1, 2, 10);
INSERT INTO Detalle_Cincho (idCincho, idCapa, cantidad)
VALUES (1, 3, 20);
INSERT INTO Detalle_Cincho (idCincho, idCapa, cantidad)
VALUES (2, 1, 15);
INSERT INTO Detalle_Cincho (idCincho, idCapa, cantidad)
VALUES (2, 2, 21);
INSERT INTO Detalle_Cincho (idCincho, idCapa, cantidad)
VALUES (2, 3, 16);


SELECT * FROM Detalle_Cincho