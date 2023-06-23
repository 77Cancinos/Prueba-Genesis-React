import { TrashFill, Download } from 'react-bootstrap-icons';
import { useForm } from "../../hooks/useForm";
import { mostrarCapas, mostrarCincho, mostrarDetalleCincho, registrarDetalleCincho, eliminarDetalleCincho } from '../api/apiRequest';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const DetalleCinchoPage = () => {

    const navigate = useNavigate();

    //Lista de capas y cinchos
    const [capas, setCapas] = useState([]);
    const [cinchos, setCinchos] = useState([]);
    //Detalle a renderizar en la tabla
    const [detalleCinchos, setDetalleCinchos] = useState([]);

    //Pasamos los datos al useForm y usamos el onInputChange para obtenerlos
    const { idCincho, idCapa, cantidad, onInputChange, onResetForm } = useForm({
        idCincho: 0,
        idCapa: 0,
        cantidad: 0,
    });

    const cargarCinchos = async () => {
        const result = await mostrarCincho();
        //console.log(result.data);
        setCinchos(result.data);
    }

    const cargarCapas = async () => {
        const result = await mostrarCapas();
        //console.log(result.data);
        setCapas(result.data);
    }

    const cargarDetalleCinchos = async () => {
        const result = await mostrarDetalleCincho();
        //console.log(result.data);
        setDetalleCinchos(result.data);
    }

    useEffect(() => {
        cargarDetalleCinchos();
        cargarCapas();
        cargarCinchos();
    }, []);

    const onDetalleCliente = async (event) => {
        event.preventDefault();
        const result = await registrarDetalleCincho(idCincho, idCapa, cantidad);
        navigate('/');
        onResetForm();
    }

    const eliminarDetalle = async (idDetalle) => {
        //console.log(idDetalle);
        const result = await eliminarDetalleCincho(idDetalle);
        if (result) {
            setDetalleCinchos(detalleCinchos.filter((dc) => dc.ID !== idDetalle));
        } else {
            return null;
        }
    };

    return (
        <>
            <div className="container">
                <h1>Gestión Pedido</h1>
                <hr />
                <form onSubmit={onDetalleCliente}>

                    <div className="mb-3">
                        <label className="form-label">Cinchos de cliente:</label>
                        <select className="form-select" placeholder="Escoge un Cincho"
                            name="idCincho"
                            value={idCincho}
                            onChange={onInputChange}
                        >
                            {
                                cinchos.map((cin, i) => {
                                    return (
                                        <option key={i} value={cin.ID} >
                                            {cin.Nombre_Cliente}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Capas</label>
                        <select className="form-select" placeholder="Escoge un Cliente"
                            name="idCapa"
                            value={idCapa}
                            onChange={onInputChange}
                        >
                            {
                                capas.map((caps, i) => {
                                    return (
                                        <option key={i} value={caps.idCapa} >
                                            {caps.nombre}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Cantidad</label>
                        <input
                            type="number"
                            className="form-control"
                            name="cantidad"
                            value={cantidad}
                            onChange={onInputChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary"
                    >
                        Enviar
                    </button>

                </form>
            </div>

            <div className="container mt-4">

                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th scope="col">ID Detalle</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Nombre Capa</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            detalleCinchos.map((dc) => {
                                return (
                                    <tr key={dc.ID}>
                                        <td> {dc.ID} </td>
                                        <td> {dc.Nombre_Cliente} </td>
                                        <td> {dc.Direccion} </td>
                                        <td> {dc.Correo_Cliente} </td>
                                        <td> {dc.Nombre_Capa} </td>
                                        <td> {dc.Cantidad} </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => eliminarDetalle(dc.ID)}>
                                                <TrashFill /> {/* Ícono de eliminación */}
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </>
    )
}
