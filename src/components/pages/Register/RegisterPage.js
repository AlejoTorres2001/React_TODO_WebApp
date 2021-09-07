import { React, useState } from "react";

import { useHistory } from "react-router";
import useAuth from "../../auth/useAuth";
export default function RegisterPage() {
  const auth = useAuth();
  const [newUserName, setnewUserName] = useState("");
  const [newUserPassword, setnewUserPassword] = useState("");
  const [Failed, setFailed] = useState(false);
  const updateNewUserName = (e) => setnewUserName(e.target.value);
  const updateNewUserPassword = (e) => setnewUserPassword(e.target.value);
  const history = useHistory();
  var band = false;
  const HandleRegister = async () => {
    var Users = auth.getUsers();
    Users.forEach(({ username }) => {
      if (username === newUserName) {
        band = true;
      }
    });
    if (band) {
      setFailed(true);
    } else {
      auth.setUsers(newUserName, newUserPassword);
      setnewUserName("");
      setnewUserPassword("");
      history.push("/login");
    }
  };

  return (
    <>
      {Failed && (
        <div class="alert alert-danger" role="alert">
          This username already exist!
        </div>
      )}
      <div class="col-md-4 mx-auto ">
        <div class="card mt-4 text-center carta background">
          <div class="card-header  carta-header">
            <h1 class="text-white">Register</h1>
          </div>
          <div class="card-body">
            <form>
              <div class="mt-3">
                <input
                  class="input form-control input-background "
                  type="text"
                  name="code"
                  placeholder="username"
                  value={newUserName}
                  onChange={updateNewUserName}
                />
              </div>
              <div class="mt-3">
                <input
                  class="input form-control input-background"
                  type="password"
                  name="code"
                  placeholder="***"
                  value={newUserPassword}
                  onChange={updateNewUserPassword}
                />
              </div>
              <div class="mt-3">
                <button
                  class=" btn btn-primary w-100"
                  type="button"
                  id="submit"
                  onClick={HandleRegister}
                >
                  <span>GO</span> <i class="fa fa-check"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
