import { Navigate, Outlet } from "react-router-dom";
import { StudentPanel } from "../screens/studentPanel/StudentPanel";
import * as paths from "./path";

const ProtectedRoute = ({
    isAllowed,
    redirectPath = paths.LOGIN,
    children,
}) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <StudentPanel />;
};

export default ProtectedRoute;
