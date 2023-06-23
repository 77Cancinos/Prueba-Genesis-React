import sql from 'mssql';
import config from '../config'

const dbSettings = {
    user: config.db_user,
    password: config.db_password,
    server: config.db_server,
    database: config.db_database,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}

export { sql };