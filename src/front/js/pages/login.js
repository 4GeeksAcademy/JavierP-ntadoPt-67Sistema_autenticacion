import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";



const Login = () => {
    const {actions, store} = useContext (Context)
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")

    const handleLogin = (e) => {
        e.preventDefault()
        actions.iniciarSesion(email, password)
        
    }
    return(
      <div className="d-flex justify-content-center mt-5">
        <div className="border bg-light p-2" style={{ width: "500px" }}>
        <form className=" text-start" onSubmit={handleLogin}>
          <div className="mt-3 mx-5">
            <label for="exampleInputEmail1" className="form-label">E-mail</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mt-3 mx-5">
            <label for="exampleInputPassword1" className="form-label">Contraseña</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary text-center my-3">Enviar</button>
          </div>
        </form>
      </div>
    </div>
      
  )
}

export default Login