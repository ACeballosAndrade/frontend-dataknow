import { Routes, Route } from "react-router"
import Clients from "../pages/Clients"
import Bills from "../pages/Bills"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Clients/>} />
        <Route path="facturas" element={<Bills/>} />
    </Routes>
  )
}

export default Router