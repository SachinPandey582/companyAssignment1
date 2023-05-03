import React, { useState } from "react";
import HCss from "../Styles/home.module.css";
import CaptionCarousel from "../Components/crousels";
import CardofPhotos1 from "../Components/Card";
import { dataofPotoes } from "../db";
import { Image } from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const[loged,setloged]=useState(false)
  const [user,setuser]=useState('')
  
const navigate=useNavigate()
  const handlenav=()=>{
    
navigate("/register")
  }
const seewhathappen=(e)=>{
  e.preventDefault()
  navigate("/register")
}



  return (
    <div >
      <div className={HCss.MContainer}>
 

     
      </div>
    
      <div >
        <CaptionCarousel />
      </div>
      <div className={HCss.mainBody}>
        <h1>PREMIUM BOUTIQUES</h1>
        <div className={HCss.FirstContainer}>
          {dataofPotoes.map((items) => (
            <div>
              <CardofPhotos1 {...items} />{" "}
            </div>
          ))}
          
        </div>
        <div className={HCss.seconContainer}>
<a href="/products">View All -</a>
          </div>
          <div style={{width:"94%" ,margin:"auto" ,marginTop:"20px"}}>
            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_440_desktop_boy_6_24m_summer02_01.jpg" alt="firstpart"/>
            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_440_desktop_boy_6_24m_summer02_02.jpg" alt="secondpart"/>
            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_440_desktop_boy_6_24m_summer02_03.jpg" alt="thirdpart"/>
            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_440_desktop_boy_6_24m_summer02_04.jpg" alt="thirdpart"/>
            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_171_desktop_summer_080323_05.jpg" alt="fifthpart"/>
          </div>
          <div className={HCss.ThirdContainer}>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_06_new.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_07_new.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_08_new.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_09_new.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_10_new.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_12.jpg" alt="smallcard"/>
          </div>
          <div>
            <img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_223_desktop_summer_080323_47.jpg" alt="ph"/>
          </div>
          <div className={HCss.fourthContainer}>

            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_19.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_20.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_21.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_22.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_23.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_1111101032022_24.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_25.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_26.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_27.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_28_doodle_poodle.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_0103202_ED_A_MAMA.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_30.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_31.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_32.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_33.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_34.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_21.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_22.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_23.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_1111101032022_24.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_25.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_26.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_27.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_28_doodle_poodle.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_30.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_31.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_32.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_33.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_34.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_21.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_22.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_23.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_1111101032022_24.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_25.jpg" alt="smallcard"/>
            <Image  src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_25.jpg" alt="smallcard"/>
            
          </div>
          <div>
            <img src="/img1.png" alt="screeshot2"/>
          </div>
          <div>
            <img src="/img.png" alt="screeshot1"/>
          </div>
      </div>
    </div>
  );
};

export default Home;
