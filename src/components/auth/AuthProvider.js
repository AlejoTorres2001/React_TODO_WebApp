import { createContext,useState,useEffect } from "react";
export const AuthContext = createContext();
export const UsersContext = createContext();

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
        login(user,password){setUser({username:user,password:password})} //en realidad este seria el ultimo paso,caso real consumir api => consultar => validar 
        ,
        logout(){
            setUser(null);
        }, 
        getUsers(){
            var Users= JSON.parse(localStorage.getItem("users")) || [] 
            if(!(Users instanceof Array)) Users = [Users]; 
            return Users
       },
       setUsers(newName,newPass){

        var Users = this.getUsers()
        Users.push({username:newName,password:newPass}); 
        Users = Users.filter(Boolean)
        localStorage.setItem("users", JSON.stringify(Users));

       },
       islogged(){
            return !! user;
        },
        getUserName(){
            return user.username
        }
    }


    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>

}


export default AuthProvider;