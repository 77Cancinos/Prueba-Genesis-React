import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark padding-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                HOME PAGE
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`}
                        to="/clientes"
                    >
                        Clientes
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`}
                        to="/cinchos"
                    >
                        Realizar Pedido
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? `active` : ``}`}
                        to="/detalleCinchos"
                    >
                        Detalle Pedido
                    </NavLink>

                </div>
            </div>

        </nav>
    )
}