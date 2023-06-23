//Se guardan las consultas de la DB
export const queries = {
    getAllClientes: 'SELECT * FROM Clientes',
    postNewCliente: 'INSERT INTO Clientes (nombre, direccion, telefono, correo) VALUES (@nombre, @direccion, @telefono, @correo)',
    getClienteById: 'SELECT * FROM Clientes WHERE idCliente = @idCliente',
    deleteCliente: 'DELETE FROM Clientes WHERE idCliente = @idCliente',
    putCliente: 'UPDATE Clientes SET nombre=@nombre, direccion=@direccion, telefono=@telefono, correo=@correo WHERE idCliente=@idCliente',

    viewCinchos: 'SELECT * FROM Vista_Cinchos',
    postCinchos: 'INSERT INTO Cinchos (idCliente, fecha_venta) VALUES (@idCliente, @fecha_venta)',
    deleteCincho: 'DELETE FROM Cinchos WHERE idCincho = @idCincho',
    updateCincho: 'UPDATE Cinchos SET idCliente = @idCliente, fecha_venta=@fecha_venta WHERE idCincho = @idCincho',

    viewDetalleCinchos: "SELECT * FROM Vista_Detalle_Cincho",
    postDetalleCinchos: 'INSERT INTO Detalle_Cincho (idCincho, idCapa, cantidad) VALUES(@idCincho, @idCapa, @cantidad)',
    deleteDetalleCinchos: 'DELETE FROM Detalle_Cincho WHERE idDetalleCincho = @idDetalleCincho',

    getCapas: 'SELECT * FROM Capas'
}