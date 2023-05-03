import React, { useState } from 'react'
import HCss from "../Styles/home.module.css";
import { Link } from 'react-router-dom';

const Navbar3 = () => {
  const [Number,setNumber]=useState(0)
  const loggedUser=JSON.parse(localStorage.getItem("loggedUser"))
  return (
    <div>
           <div style={{display:"flex",justifyContent:"space-around",columnGap:"150px"}}>
           <div className={HCss.Container} >
          <div>
            <img
              src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
              alt="logo"
            />
          </div>
          <div>
            <input placeholder="Search for a Category,brand or products" />
          </div>
        </div>

           <div className={HCss.Container} style={{position:"relative",zIndex:"10"}}>
          <div>Select location</div> |<div>Stores & Preschools</div> |
          <div>Support</div> |<div>Track Order</div> |<div>FirstCry</div> |
          <div> ParentingMy</div> |<div>Shortlis</div> |
          <div> Cart{Number}</div>
        {
          loggedUser  ? 
          <button style={{backgroundColor:"black",color:"white",padding:"3px 8px",borderRadius:"10px"}} >{loggedUser.name}</button>
           : <Link to={"/register"}>
         <button style={{backgroundColor:"black",color:"white",padding:"3px 8px",borderRadius:"10px"}}>login</button>
         </Link>
        } 
        </div>
           </div>


        <div className={HCss.LowNavbar}>
       
       <div >
       BOY FASHION
       </div>
 
  
    <Link to="/products" >GIRL FASHION</Link>
    <Link to="/products" > Products</Link>
    <Link to="/products" >TOYS</Link>
    <Link to="/products" >DIAPERING</Link>
    <Link to="/products" >GEAR</Link>
    <Link to="/products" >FEEDING</Link>
    <Link to="/products" > BATH</Link>
    <Link to="/products" >NURSERY</Link>
    <Link to="/products" >MOMS</Link>
    <Link to="/products" >HEALTH</Link>
    <Link to="/products" >BOUTIQUES</Link>
  </div>
    </div>
  )
}

export default Navbar3
