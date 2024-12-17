import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  var navigate=useNavigate()
  useEffect(()=>{
    console.log(window.localStorage.getItem("token"))
    var role= window.localStorage.getItem("role")
    if(window.localStorage.getItem("token")){
      if(role==="admin"){
        navigate("/adimindashbord")
      }
      
      if(role==="manager"){
        navigate("/manegerdashbord")
      }
      if(role==="user"){
        navigate("/userdashbord")
      }
    
    
  }
  else{
   navigate("/login")
  }

  })
  return (
    <div>

      
    </div>
  )
}
