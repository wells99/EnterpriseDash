import { Outlet } from "react-router";

const AuthLayout = () => {
    return (
        <div className="min-h-screen min-w-screen flex justify-center items-center bg-slate-800">
            <Outlet />
        </div>
    );
}

export default AuthLayout;