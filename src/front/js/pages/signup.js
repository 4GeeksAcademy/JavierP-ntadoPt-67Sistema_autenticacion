import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";


const Signup = () => {
    const {actions, store} = useContext (Context)
    const [name,setName] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")

    const handleSignUp = (e) => {
        e.preventDefault()
        actions.crearUsuario(name, email, password)
        
    }
    return(
        <form onSubmit={handleSignUp}>
        <div classname="mb-3">
          <label for="exampleInputPassword1" classname="form-label">name</label>
          <input onChange={(e)=>{setName(e.target.value)}} type="text" classname="form-control" id="exampleInputPassword1"/>
        </div>
        <div classname="mb-3">
          <label for="exampleInputEmail1" classname="form-label">Email address</label>
          <input onChange={(e)=>{setEmail(e.target.value)}} type="email" classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div classname="mb-3">
          <label for="exampleInputPassword1" classname="form-label">Password</label>
          <input onChange={(e)=>{setPassword(e.target.value)}} type="password" classname="form-control" id="exampleInputPassword1"/>
        </div>
        
        <button type="submit" classnamename="btn btn-primary">Submit</button>
      </form>
    )

}

export default Signup