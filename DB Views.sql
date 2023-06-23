-- VISTAS

USE WebCinchos;

-- Vista para la tabla "Cinchos" 
CREATE VIEW Vista_Cinchos AS
SELECT c.idCincho AS 'ID', c.idCliente AS 'No_Cliente', cl.nombre AS 'Nombre_Cliente', FORMAT (c.fecha_venta, 'd', 'es-mx') AS 'FECHA_VENTA'
FROM Cinchos c
INNER JOIN Clientes cl ON c.idCliente = cl.idCliente;


SELECT * FROM Vista_Cinchos;

-- DROP VIEW Vista_Cinchos;

--  Vista para la tabla "Detalle_Cincho"
CREATE VIEW Vista_Detalle_Cincho AS
SELECT dc.idDetalleCincho AS 'ID', dc.idCincho AS 'No_Cincho', c.idCliente AS 'No_Cliente', 
	   cl.nombre AS 'Nombre_Cliente', cl.correo AS 'Correo_Cliente', cl.direccion AS 'Direccion',
	   dc.idCapa AS 'No_Capa', cp.nombre AS 'Nombre_Capa', dc.cantidad AS 'Cantidad'
FROM Detalle_Cincho dc
INNER JOIN Cinchos c ON dc.idCincho = c.idCincho
INNER JOIN Clientes cl ON c.idCliente = cl.idCliente
INNER JOIN Capas cp ON dc.idCapa = cp.idCapa;


SELECT * FROM Vista_Detalle_Cincho;

 --DROP VIEW Vista_Detalle_Cincho;
