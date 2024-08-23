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
      <div className="border bg-light mt-5 mx-5">
        <form className=" text-center" onSubmit={handleSignUp}>
          <div className="mt-3 mx-5">
            <label for="exampleInputPassword1" className="form-label">Name</label>
            <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mt-3 mx-5">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mt-3 mx-5">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="submit" className="btn btn-primary text-center my-3">Submit</button>
        </form>
      </div>
    )
}

export default Signup