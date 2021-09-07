import React from "react";
import AuthProvider from "./components/auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import './styles/App.css'
function App() {
  return(
    <div className="box">
       <AuthProvider>

      <AppRouter></AppRouter>


      </AuthProvider>
    </div>
   
  )
   


  
}
export default App;
