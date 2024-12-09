import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children
    }

    return <Navigate to={"/login"} state={location.pathname}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.any
}


export default PrivateRoute;