import { getConnection, sql, queries } from '../database/';

export const getClientes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllClientes);
        //console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ msg: 'Error al listar clientes' });
        res.send(error.message);
    }
};

export const postCliente = async (req, res) => {
    try {
        const { nombre, direccion, telefono, correo } = req.body;

        //validaciones
        if (nombre == null || direccion == null || telefono == null || correo == null) {
            return res.status(400).json({
                msg: 'Bad Request. Llena todos los campos'
            });
        }
        //console.log(nombre);

        const pool = await getConnection();
        await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('direccion', sql.VarChar, direccion)
            .input('telefono', sql.VarChar, telefono)
            .input('correo', sql.VarChar, correo)
            .query(queries.postNewCliente);

        res.status(201).json({
            msg: 'Cliente registrado correctamente',
            nombre,
            direccion,
            telefono,
            correo,
        });
    } catch (error) {
        res.status(500).json({ msg: 'Error al insertar un nuevo cliente' });
        res.send(error.message);
    }
};

export const getClienteById = async (req, res) => {

    try {
        const { id } = req.params;

        const pool = await getConnection();
        const result = await pool.request()
            .input('idCliente', id)
            .query(queries.getClienteById);

        res.status(200).json({
            msg: 'Información del cliente:',
            cliente: result.recordset[0],
        });

    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar al cliente' });
        res.send(error.message);
    }

}


export const deleteClienteById = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnection();
        const result = await pool.request()
            .input('idCliente', id)
            .query(queries.deleteCliente);

        res.status(200).json({
            msg: 'Cliente eliminado correctamente:',
        });

    } catch (error) {
        res.status(500).json({ msg: 'Error al elimninar al cliente' });
        res.send(error.message);
    }
}

export const putClienteById = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, direccion, telefono, correo } = req.body;

        const pool = await getConnection();
        await pool.request()
            .input('idCliente', sql.Int, id)
            .input('nombre', sql.VarChar, nombre)
            .input('direccion', sql.VarChar, direccion)
            .input('telefono', sql.VarChar, telefono)
            .input('correo', sql.VarChar, correo)
            .query(queries.putCliente);

        res.status(202).json({
            msg: 'Cliente actualizado correctamente:',
            nombre,
            direccion,
            telefono,
            correo,
        });
    } catch (error) {
        res.status(500).json({ msg: 'Error al editar al cliente' });
        res.send(error.message);
    }
}