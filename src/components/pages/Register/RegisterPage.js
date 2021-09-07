import {React,useState} from 'react'

import { useHistory } from 'react-router';
import useAuth from '../../auth/useAuth';
export default function RegisterPage() {
    const auth = useAuth()
    const [newUserName, setnewUserName] = useState("");
    const [newUserPassword, setnewUserPassword] = useState("");
    const [Failed, setFailed] = useState(false)
    const updateNewUserName = (e) => setnewUserName(e.target.value);
    const updateNewUserPassword = (e) => setnewUserPassword(e.target.value);
    const history = useHistory()
    var band = false
    const HandleRegister = async  () =>{
        var Users = auth.getUsers()
        Users.forEach(({username}) => {
            if( username === newUserName){
                band=true

            }
        })
    if(band){
        setFailed(true)
    }
    else{
        auth.setUsers(newUserName,newUserPassword)
        setnewUserName("")
        setnewUserPassword("")
        history.push("/login")
    } 
    }
    
    return (
        <div>
               {Failed && <div class="alert alert-danger" role="alert">
                    This username already exist!
                        </div>}
             <h1>Register</h1>
             <form className="form-control">
                 <label for="username" className="form-check-label" >Usuario</label>
                 <input id="username"placeholder="username" className="form-check-input" type="text"
        className="form-control"
        value={newUserName}
        onChange={updateNewUserName}
                 ></input>
                  <label for="password"  className="form-check-label">Contraseña</label>
                 <input id="password" placeholder="password" className="form-check-input" type="text"
        className="form-control"
        value={newUserPassword}
        onChange={updateNewUserPassword}
                 ></input>
                 <button type="button" className="btn btn-primary m-2" onClick={HandleRegister} >REGISTER</button>
             </form>
        </div>
    )
}

