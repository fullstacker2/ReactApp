import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute(props) {
    const isLoggedIn = useSelector((state) => !!state.user);
    if(!isLoggedIn) {
        return <Navigate to={"/login"} />;
    }
    return props.children;
}
export default PrivateRoute;