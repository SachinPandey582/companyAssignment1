import React from 'react'
import {products} from "../db"
import PCss from "../Styles/product.module.css"
import ProductCard from '../Components/ProductCard'
const Products = () => {
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
    <div >
        <ProductCard {...item}/>
    </div>
))
      }
    </div>
   </div>
  )
}

export default Products
