import React from 'react'
import { Link } from 'react-router-dom'
function LinkCompo() {
  return (
  <>
    <div className='link-cont'>
        <Link to="/" className='Link'>Home</Link>
        <Link to="/bollywood" className='Link'>Bollywood</Link>
        <Link to="/technology" className='Link'>Technology</Link>
        <Link to="/hollywood" className='Link'>Hollywood</Link>
        <Link to="/fitness" className='Link'>Fitness</Link>
        <Link to="/food" className="Link">Food</Link>
        </div>
   
    </>
  )
}

export default LinkCompo