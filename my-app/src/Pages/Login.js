import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import RCss from "../Styles/Register.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userexist,setuserExist]=useState([])
  const [email,setemail]=useState("")
  const navigate=useNavigate()
  const getTheDatabase = async () => {
    let datafromserver =   await axios.get(
      "https://companyserver-osxt.onrender.com/users"
    );
setuserExist(datafromserver.data)

  }

const handleSubmit =(e)=>{
  e.preventDefault()
  let userexist1 = userexist.find((user) => user.email == email);
// console.log(userexist1,"this is to check either the user exists or not")

console.log(userexist1)
if(userexist1){
  
  localStorage.setItem("loggedUser",JSON.stringify(userexist1))
navigate("/login2")
}else{
  alert("Please Register first")
  navigate("/register")
}
}

useEffect(()=>{
  getTheDatabase()
},[])
  return (
    <Box className={RCss.Container}>
      <Box>
        <Image
          m={"auto"}
          src="https://cdn.fcglcdn.com/brainbees/images/n/fc-logo-s.jpg"
          alt="thelogoregister"
        />
      </Box>
      <br />
      <Heading size={"md"}>Login / Register</Heading>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Email ID/Mobile No. </label>
        <input
          type="text"
          className={RCss.inputofRegister}
          name="usrname"
          id="usrname"
          minLength="3"
          maxLength="30"
          autoComplete="off"
          placeholder="Enter your Mobile ID or Mobile No."
          onChange={(e)=>setemail(e.target.value)}
        />

        <button  className={RCss.CButton} type="submit">
          CONTINUE
        </button>
      </form>
      <Button className={RCss.Google}>
        <img
          style={{ width: "25px" }}
          src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-transparent-png-pictures-icons-and-0.png"
          alt="facebooklogo"
        />{" "}
        Facebook
      </Button>
      <br />
      <Button className={RCss.Google}>
        {" "}
        <img
          style={{ width: "25px", marginLeft: "-15px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
          alt="GoogleLogo"
        />
        Google
      </Button>
      <p className={RCss.loginregister}>
        New to FirstCry? <a href="/register">Register Here</a>
      </p>
      <br />
      <hr />
      <br />
      <p>
        By continuing, you agree to Firstcry's Conditions of Use and Privacy
        Notice.
      </p>
    </Box>
  );
};

export default Login;
