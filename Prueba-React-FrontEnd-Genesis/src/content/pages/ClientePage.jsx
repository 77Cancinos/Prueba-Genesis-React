import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { registrarCliente } from '../api/apiRequest';

export const ClientePage = () => {

  //Pasamos los datos al useForm y usamos el onInputChange para obtenerlos
  const { nombre, direccion, telefono, correo, onInputChange, onResetForm } = useForm({
    nombre: '',
    direccion: '',
    telefono: '',
    correo: '',
  });

  const navigate = useNavigate();

  const onCreateCliente = async (event) => {
    event.preventDefault();
    const result = await registrarCliente(nombre, direccion, telefono, correo);
    onResetForm();
    navigate('/cinchos');
  }

  return (
    <>
      <div className="container">
        <h1>Cliente</h1>
        <hr />
        <form onSubmit={onCreateCliente}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={nombre}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input
              type="text"
              className="form-control"
              name="direccion"
              value={direccion}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="text"
              className="form-control"
              name="telefono"
              value={telefono}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo Electronico</label>
            <input type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="correo"
              value={correo}
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