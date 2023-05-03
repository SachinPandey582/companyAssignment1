import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import RCss from "../Styles/Register.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [database, setdatabase] = useState([]);
  const [FromData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    cart:[],

  });

  const getTheDatabase = async () => {
    let datafromserver = await axios.get(
      "https://companyserver-osxt.onrender.com/users"
    );
    setdatabase(datafromserver.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userexist = database.some((user) => user.email === FromData.email);
    if (userexist) {
      alert("user is already exist");
      window.location.reload()
    } else {
      axios.post("https://companyserver-osxt.onrender.com/users", FromData);
      alert("Thanks for Registering here")
      navigate("/login"); 
    }
    console.log(database, "this is database");
   
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromData({ ...FromData, [name]: value });
  };

  useEffect(() => {
    getTheDatabase();
  }, []);

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
      <Heading size={"md"}>Register</Heading>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          onChange={handleChange}
          className={RCss.inputofRegister}
          name="name"
          id="usrname"
          minLength="3"
          maxLength="30"
          autoComplete="off"
          placeholder="Enter your Full Name"
        
          required
        />
        <label>Mobile Number</label>
        <input
          className={RCss.inputofRegister}
          onChange={handleChange}
          placeholder="EnterMobile number"
          name="phone"
          type="number"
          required
        />
        <p>OTP will be sent on this Mobile No. for verification.</p>
        <label>Email ID</label>
        <input
          className={RCss.inputofRegister}
          onChange={handleChange}
          placeholder="Enter email"
          name="email"
          type="email"
          required
        />
        <label>Password</label>
        <input
          className={RCss.inputofRegister}
          onChange={handleChange}
          placeholder="Enter your password"
          name="password"
          type="password"
          required
        />
        <p>
          Password must be at least 8 characters long with 1 Uppercase, 1
          Lowercase & 1 Numeric character.
        </p>
        <button variant={"solid"} className={RCss.CButton} type="submit">
          CONTINUE
        </button>
      </form>
<p style={{color:"blue",margin:"auto"}}><a href="/login">Go to Login</a></p>
    </Box>
  );
};
export default Register;
