import { Navigate } from "react-router-dom";
import { StudentPanel } from "../screens/studentPanel/StudentPanel";

const ProtectedRoute = ({
    isAllowed,
    dataUser,
    children,
}) => {

    if (!isAllowed) {
        return <Navigate to={'/405'} replace />;
    }

    if (dataUser) {
        return children ? children : <StudentPanel />;
    } 
 
};

export default ProtectedRoute;
