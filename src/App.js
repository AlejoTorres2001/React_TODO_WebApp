import React from "react";
import AuthProvider from "./components/auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
function App() {
  return(
    <div>
       <AuthProvider>

      <AppRouter></AppRouter>


      </AuthProvider>
    </div>
   
  )
   


  
}
export default App;
