import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { mostrarCliente, registrarVentaCincho } from '../api/apiRequest';
import { useEffect, useState } from "react";

export const CinchosPage = () => {

    const navigate = useNavigate();

    //Lista de clientes
    const [clientes, setClientes] = useState([]);

    //Pasamos los datos al useForm y usamos el onInputChange para obtenerlos
    const { idCliente, fecha_venta, onInputChange, onResetForm } = useForm({
        idCliente: 0,
        fecha_venta: '',
    });

    const cargarClientes = async () => {
        const result = await mostrarCliente();
        //console.log(result.data);
        setClientes(result.data);
    }

    useEffect(() => {
        cargarClientes();
    }, []);

    const onCreateCliente = async (event) => {
        event.preventDefault();
        const result = await registrarVentaCincho(idCliente, fecha_venta);
        //console.log(result);
        onResetForm();
        navigate('/detalleCinchos');
    }

    return (
        <>
            <div className="container">
                <h1>Realizar Pedido</h1>
                <hr />
                <form onSubmit={onCreateCliente}>

                    <div className="mb-3">
                        <label className="form-label">Clientes</label>
                        <select className="form-select" placeholder="Escoge un Cliente"
                            name="idCliente"
                            value={idCliente}
                            onChange={onInputChange}
                        >
                            {
                                clientes.map((client, i) => {
                                    return (
                                        <option key={i} value={client.idCliente} >
                                            {client.nombre}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Fecha Venta</label>
                        <input
                            type="date"
                            className="form-control"
                            name="fecha_venta"
                            value={fecha_venta}
                            onChange={onInputChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </>
    )
}
