import {Redirect, Route} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

const ProtectedRoute = (props) => {
    const {currentUser} = useAuth();
    
    console.log("currentUser Is: ",currentUser);
    if(currentUser){
        return <Route {...props} />
    }
    else{
        return <Redirect to="/login" />
    }
}


export default ProtectedRoute;