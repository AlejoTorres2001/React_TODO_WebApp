import { React, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import '../../../styles/LoginPage.css'
const LoginPage = () => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [User, setUser] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Failed, setFailed] = useState(false);
  const updateUser = (e) => setUser(e.target.value);
  const updateUserPassword = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    var Users = auth.getUsers();
    Users.forEach(async ({ username, password }) => {
      if (username === User && password === Password) {
        await auth.login(User, Password);
        setFailed(false);
        history.push(location.state?.from || "/");
      }
    });
    setFailed(true);
  };
  return (
    <div>
      {Failed && (
        <div class="alert alert-danger" role="alert">
          Wrong Username or password!
        </div>
      )}

      <div class="col-md-4 mx-auto ">
        <div class="card mt-4 text-center carta background">
          <div class="card-header  carta-header">
            <h1 class="text-white">Login</h1>
          </div>
          <div class="card-body">
            <form>
              <div class="mt-3">
                <input
                  class=" form-control input-background "
                  type="text"
                  name="code"
                  placeholder="username"
                  value={User}
                  onChange={updateUser}
                />
              </div>
              <div class="mt-3">
                <input
                  class=" form-control input-background"
                  type="password"
                  name="code"
                  placeholder="***"
                  value={Password}
                  onChange={updateUserPassword}
                />
              </div>
              <div class="mt-3">
                <button
                  class=" btn btn-primary w-100"
                  type="button"
                  id="submit"
                  onClick={handleLogin}
                >
                  <span>GO</span> <i class="fa fa-check"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
        </div>
      </div>

      
    </div>
  );
};
export default LoginPage;
