import {React,useState} from 'react'
import { Form, FormLabel, InputGroup } from 'react-bootstrap'
import { useHistory } from 'react-router';

export default function RegisterPage() {
    const [newUserName, setnewUserName] = useState("");
    const [newUserPassword, setnewUserPassword] = useState("");
    const updateNewUserName = (e) => setnewUserName(e.target.value);
    const updateNewUserPassword = (e) => setnewUserPassword(e.target.value);
    const history = useHistory()
    const HandleRegister = () =>{
        //TODO  VALIDATE CREDENTIAL 
        var Users= JSON.parse(localStorage.getItem("users")) 
        console.log({username:newUserName,password:newUserPassword})
        console.log(Users)

        if(!(Users instanceof Array)) Users = [Users]; 
        Users.push({username:newUserName,password:newUserPassword}); 
        Users = Users.filter(Boolean)
        localStorage.setItem("users", JSON.stringify(Users));

        setnewUserName("")
        setnewUserPassword("")
        
        history.push("/login")
    }
    return (
        <div>
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

