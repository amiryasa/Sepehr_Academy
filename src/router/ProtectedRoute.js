import { Navigate } from "react-router-dom";
import { StudentPanel } from "../screens/studentPanel/StudentPanel";
import * as paths from "./path";

const ProtectedRoute = ({
    isAllowed,
    dataUser,
    redirectPath = paths.LOGIN,
    children,
}) => {

    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    if (dataUser) {
        return children ? children : <StudentPanel />;
    } 
 
};

export default ProtectedRoute;
