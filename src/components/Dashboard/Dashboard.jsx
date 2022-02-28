import React from 'react'
import { useNavigate } from 'react-router-dom';



const Dashboard = (props) => {
    const navigate = useNavigate();
    
    const logouthandler=()=>{
        console.log("logout");
        alert("Logout")
        localStorage.removeItem('token')
        navigate('/login/')
    }
    if (props.check){
        console.log(props.check);
    }
    else{
        console.log(props.check);
    }
    if(!localStorage.getItem('token')){
        alert("Loguot people")
    }
  return (
    <div>Dashboard<button type='button' onClick={logouthandler}>Logout</button></div>
  )
}

export default Dashboard