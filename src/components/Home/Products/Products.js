import React from 'react'
import './products.scss'
import { productslist } from './productsdata'
import ProductsList from './ProductsList'
function Products() {
  return (
    <div className="products">
        <div className="title">
            <h2>Our products</h2>
        </div>
        <div className="categories">
            {productslist.map((product)=>{
                const {id,title,img}=product
                return (
                <button className='category-btn' key={id}>
                <img src={img} alt="" />
                {title}
                </button>
                )
            })}
            
        </div>
        <ProductsList/>
    </div>
  )
}

export default Products