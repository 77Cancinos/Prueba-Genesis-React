import { Route, Routes } from "react-router-dom"
import { ClientePage, CinchosPage, HomePage, DetalleCinchoPage } from '../content';
import { Navbar } from "../ui";
export const AppRouter = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="clientes" element={<ClientePage />} />
        <Route path="cinchos" element={<CinchosPage />} />
        <Route path="detalleCinchos" element={<DetalleCinchoPage />} />
      </Routes>
    </>
  )
}