import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./LinkCompo.css"
function LinkCompo() {
  const[menuOpen,setMunuOpen]=useState(false)
  return (
    <>

      <div className='site-name'>
        <h2 className='site-text'><div className='rotate'>The</div><div className='siren'>Siren</div></h2>
      </div>

      <div className='nav'>
        <div className='menu' onClick={()=>{
          setMunuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen?"Open":""}>
          <li><Link to="/" className='title'>Home</Link></li>
          <li><Link to="/bollywood" className='title'>Bollywood</Link></li>
          <li> <Link to="/technology" className='title'>Technology</Link></li>
          <li> <Link to="/hollywood" className='title'>Hollywood</Link></li>
          <li>  <Link to="/fitness" className='title'>Fitness</Link></li>
          <li> <Link to="/food" className="title">Food</Link></li>
        </ul>
      </div>

    </>
  )
}

export default LinkCompo