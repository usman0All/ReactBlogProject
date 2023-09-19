import React from 'react'
import { Link } from 'react-router-dom'
import "./LinkCompo.css"
function LinkCompo() {
  return (
  <>

 <div className='site-name'>
       <h2 className='site-text'><div className='rotate'>The</div><div className='siren'>Siren</div></h2>
  </div> 
 
    <div className='nav'>
       <div className='menu'>
         <span></span>
        <span></span>
        <span></span>
     </div>
       <Link to="/" className='a'>Home</Link>
        <Link to="/bollywood" className='a'>Bollywood</Link>
        <Link to="/technology" className='a'>Technology</Link>
        <Link to="/hollywood" className='a'>Hollywood</Link>
        <Link to="/fitness" className='a'>Fitness</Link>
        <Link to="/food" className="a">Food</Link>
        </div>
   
    </>
  )
}

export default LinkCompo