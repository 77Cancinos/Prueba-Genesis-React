import axios from 'axios';

const URL = 'http://localhost:8080';

export const registrarCliente = async (nombre, direccion, telefono, correo) => {
    try {
        const response = await axios.post(`${URL}/clientes`, {
            nombre,
            direccion,
            telefono,
            correo,
        });
        //console.log(response.data);
        return response;

    } catch (error) {
        console.error(error);
    }

};

export const mostrarCliente = async () => {
    try {
        const response = await axios.get(`${URL}/clientes`);
        //console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const mostrarCincho = async () => {
    try {
        const response = await axios.get(`${URL}/cinchos`);
        //console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const mostrarCapas = async () => {
    try {
        const response = await axios.get(`${URL}/capas`);
        // console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const registrarVentaCincho = async (idCliente, fecha_venta) => {
    try {
        //console.log(idCliente, fecha_venta);
        const response = await axios.post(`${URL}/cinchos`, {
            idCliente,
            fecha_venta
        });
        //console.log(response);
        return response;

    } catch (error) {
        console.error(error);
    }
};

export const registrarDetalleCincho = async (idCincho, idCapa, cantidad) => {
    //console.log(idCincho, idCapa, cantidad);
    try {
        const response = await axios.post(`${URL}/detalle_cincho`, {
            idCincho,
            idCapa,
            cantidad
        });
        //console.log(response);
        return response;

    } catch (error) {
        console.error(error);
    }
}

export const mostrarDetalleCincho = async () => {
    try {
        const response = await axios.get(`${URL}/detalle_cincho`);
        //console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const eliminarDetalleCincho = async (idDetalle) => {

    // console.log(idDetalle);
    try {
        const response = await axios.delete(`${URL}/detalle_cincho/${idDetalle}`);
        //console.log(response);
        return response;

    } catch (error) {
        console.error(error);
    }
}