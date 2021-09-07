import { createContext,useState,useEffect,useContext } from "react";
export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    useEffect(()=>{
        try {
            localStorage.setItem("user",JSON.stringify(user));
            
        } catch (error) {
            localStorage.removeItem("user")
            console.log(error)
        }
    },[user])
    const contextValue={
        user,
        login(){setUser({id:1,username:"luis50"})} //en realidad este seria el ultimo paso,caso real consumir api => consultar => validar 
        ,
        logout(){
            setUser(null);
        },
        islogged(){
            return !! user;
        }
    }

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>

}


export default AuthProvider;