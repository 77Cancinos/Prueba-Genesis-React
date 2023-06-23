import { getConnection, sql, queries } from '../database/';

export const getCinchos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.viewCinchos);
        //console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ msg: 'Error al listar Cinchos' });
        res.send(error.message);
    }
};

export const postCinchos = async (req, res) => {
    try {
        const { idCliente, fecha_venta } = req.body;

        //validaciones
        if (idCliente == null || fecha_venta == null) {
            return res.status(400).json({
                msg: 'Bad Request. Llena todos los campos'
            });
        }

        const pool = await getConnection();
        await pool.request()
            .input('idCliente', sql.Int, idCliente)
            .input('fecha_venta', sql.Date, fecha_venta)
            .query(queries.postCinchos);

        res.status(201).json({
            msg: 'Cincho registrado correctamente',
            idCliente, fecha_venta
        });

    } catch (error) {
        res.status(500).json({ msg: 'Error al insertar un cincho' });
        res.send(error.message);
    }
};

export const deleteCinchosById = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnection();
        await pool.request()
            .input('idCincho', id)
            .query(queries.deleteCincho);

        res.status(200).json({
            msg: 'Cincho eliminado correctamente:',
        });

    } catch (error) {
        res.status(500).json({ msg: 'Error al elimninar al cincho' });
        res.send(error.message);
    }
}

export const putCinchoById = async (req, res) => {
    try {
        const { id } = req.params;
        const { idCliente, fecha_venta } = req.body;

        const pool = await getConnection();
        await pool.request()
            .input('idCincho', sql.Int, id)
            .input('idCliente', sql.Int, idCliente)
            .input('fecha_venta', sql.VarChar, fecha_venta)
            .query(queries.updateCincho);

        res.status(202).json({
            msg: 'Cincho actualizado correctamente:',
            idCliente, fecha_venta,
        });
    } catch (error) {
        res.status(500).json({ msg: 'Error al editar el cincho' });
        res.send(error.message);
    }
}