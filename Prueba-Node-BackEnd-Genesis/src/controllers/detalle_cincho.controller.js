import { getConnection, sql, queries } from '../database/';

export const getDetalleCinchos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.viewDetalleCinchos);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ msg: 'Error al listar el detalle de cinchos' });
        res.send(error.message);
    }
};

export const postDetalleCinchos = async (req, res) => {
    try {
        const { idCincho, idCapa, cantidad } = req.body;
        //validaciones
        if (idCincho == null || idCapa == null, cantidad == null) {
            return res.status(400).json({
                msg: 'Bad Request. Llena todos los campos'
            });
        }

        const pool = await getConnection();
        await pool.request()
            .input('idCincho', sql.Int, idCincho)
            .input('idCapa', sql.Int, idCapa)
            .input('cantidad', sql.Int, cantidad)
            .query(queries.postDetalleCinchos);

        res.status(201).json({
            msg: 'Detalle Cincho registrado correctamente',
            idCincho, idCapa, cantidad
        });

    } catch (error) {
        res.status(500).json({
            msg: 'Error al insertar un DETALLE'
        });
        res.send(error.message);
    }
};



export const deleteDetalleCinchosById = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnection();
        await pool.request()
            .input('idDetalleCincho', id)
            .query(queries.deleteDetalleCinchos);

        res.status(200).json({
            msg: 'Detalle eliminado correctamente:',
        });

    } catch (error) {
        res.status(500).json({ msg: 'Error al elimninar el detalle' });
        res.send(error.message);
    }
}

