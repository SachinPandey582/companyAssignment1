import React, { useEffect, useState } from 'react'
import {products} from "../db"
import PCss from "../Styles/product.module.css"
import ProductCard from '../Components/ProductCard'
import axios from 'axios'





const Products = () => {
const [data,setdata]=useState()


  const getData=async()=>{
    let datafromserver = await axios.get(
      "https://companyserver-osxt.onrender.com/users"
    )
  setdata(datafromserver.data)
  }

 function  addToCartUsersAcc(addedProduct,id){
  axios.patch(`https://companyserver-osxt.onrender.com/users/${id}`,addedProduct)
  
 }


  const handleClickhere= (item)=>{
  
    const loggedUser=JSON.parse(localStorage.getItem("loggedUser")) 
    if(loggedUser){
      console.log("logged user email",loggedUser)
  console.log("added to card item",item)
  console.log("logged user cart",data)

  // const addedProduct = {data}
  let currentUserStatus = data.find((ele)=>ele.id===loggedUser.id)
  const addedProduct ={cart:[...currentUserStatus.cart,item]}

    

  addToCartUsersAcc(addedProduct,loggedUser.id)
  console.log(data)

alert("product added in yo card")
    }
  
  

// i am getting the email here.post



  }

useEffect(()=>{
getData()
},[data])

  return (
   <div className={PCss.mainContainer}>
    <div className={PCss.upperNav}>
        <div>
        Stay Fashion Forward | 4 - 14Y
(650 Results)
        </div>
        <div>
           email : sachinpandey582@gmail.com | login/Signup
        </div>
    </div>
     <div className={PCss.Container}>
      {
products.map((item)=>(
    <div key={Date.now()+item.ptitle+Math.random()} >
        <ProductCard onClick={handleClickhere} {...item}/>
    </div>
))
      }
    </div>
   </div>
  )
}

export default Products
