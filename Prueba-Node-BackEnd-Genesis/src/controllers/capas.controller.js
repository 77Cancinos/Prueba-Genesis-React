import { getConnection, sql, queries } from '../database/';

export const getCapas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getCapas);
        //console.log(result);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ msg: 'Error al listar Capas' });
        res.send(error.message);
    }
};