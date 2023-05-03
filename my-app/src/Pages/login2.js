import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import RCss from "../Styles/Register.module.css";
import { useNavigate } from "react-router-dom";
const Login2 = () => {
    const navigate=useNavigate()
    
    const [otp,setotp]=useState("")
   console.log(otp)
   const handleSubmit=(e)=>{
    e.preventDefault()
    navigate("/")
   }
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
        <label>Please Enter the OTP Here </label>
        <input
          type="text"
          className={RCss.inputofRegister}
          name="usrname"
          id="usrname"
          minLength="3"
          maxLength="30"
          autoComplete="off"
          placeholder="Enter 5 Digit OTP"
        onChange={(e)=>setotp(e.target.value)}
        />

        <Button className={RCss.CButton} type="submit">
          CONTINUE
        </Button>
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

export default Login2;
