import React, {useContext, useEffect} from "react";
import { Context, } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const Private = () => {
    const {store, actions} = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
        const validation = actions.validacion()
        if (!validation){
            navigate("/login")
        }
    }, [])

    return(
        <p>Private</p>
    )

}
export default Private