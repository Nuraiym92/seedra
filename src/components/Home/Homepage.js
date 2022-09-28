import React from 'react'
import Hero from './Hero/Hero'
import Navbar from "./Navbar/Navbar"
import Products from './Products/Products'
import SmallAdverd from './SmallAdverd/SmallAdverd'
import "./homepage.scss"
function Home() {
  return (
<>
<Navbar/>
<Hero/>
<SmallAdverd/>
<Products/>
</>
  )
}

export default Home