import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Inicio"
import Register from "../pages/Register"
import RecoveryPassword from "../pages/RecoveryPassword"
import AuthLayout from "../layouts/AuthLayout"
import SidebarLayout from "../pages/SidebarLayout"
const Paths = () => {
    return (
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/recovery" element={<RecoveryPassword />} />
                    <Route path="/dash" element={<SidebarLayout />} />
                </Route>
            </Routes>
         </BrowserRouter>
    )
}

export default Paths