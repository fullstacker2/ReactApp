import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
    const isLoggedIn = true;
    if(!isLoggedIn) {
        return <Navigate to={"/login"} />;
    }
    return props.children;
}
export default PrivateRoute;