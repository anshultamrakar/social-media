import {createContext} from "react"
import { useState } from "react"
import axios from "axios"


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
   
    const [firstname , setFirstname] = useState("")
    const [validName , setValidName] = useState("")
    const [lastname , setLastname] = useState("")
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [matchPwd , setMatchPwd] = useState("")
    const [success , setSuccess] = useState(false)

    const handleSignUp = async (e) => {
        e.preventDefault()
        try{
         const response = await axios.post("/api/auth/signup", {
            username, 
            password,
            firstname , 
            lastname,
         })
          console.log(response.data)
        }catch(err){
         console.error(err)
        }
       }
    return (
        <AuthContext.Provider value = {{handleSignUp ,firstname , setFirstname ,
         lastname ,setLastname , username , setUsername , setPassword , matchPwd , setMatchPwd , 
         password , success ,  setSuccess }}>
          {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider