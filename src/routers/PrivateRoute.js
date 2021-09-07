import { Redirect, Route,useLocation } from "react-router-dom";
import useAuth from "../components/auth/useAuth";
 
//const user ={id:1,name:"jenny"}
export default function PrivateRoute({component:Component,...rest}) {
    const auth = useAuth(); //resultado de la autenticacion
    const location = useLocation()
    return (
         <Route {...rest}> 
{/* //solo valida que YA este autenticado  */}
            {   auth.islogged() ? <Component></Component> 
                : <Redirect to={{pathname:"/login",state:{from : location}}}></Redirect>


            }

        </Route>

    )
}
