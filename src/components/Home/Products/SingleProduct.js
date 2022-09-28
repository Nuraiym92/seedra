import React from 'react'
import {products} from "./productsdata.js"
function SingleProduct() {
  return (
    <div className='single-item'>
        {
        products.map((item)=>{
            const {id,title,price,img}=item
            return (
                <article key={id} className="single-product">
                 <img src={img} alt="" />
                <h3>{title}</h3>
                <p>${price}</p>
                </article>
            )
        })
    } 
    </div>
   
    
  )
}

export default SingleProduct