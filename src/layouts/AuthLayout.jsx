import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-slate-800">
            <Outlet />
        </div>
    );
}

export default AuthLayout;