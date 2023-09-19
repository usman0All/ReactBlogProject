import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import LinkCompo from './LinkCompo'

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='section'>
        <h3>Quick Links</h3>
        <div className='flink'> 
        <Link to="/" className='flinks'>Home</Link>
        <Link to="/bollywood" className='flinks'>Bollywood</Link>
        <Link to="/technology" className='flinks'>Technology</Link>
        <Link to="/hollywood" className='flinks' >Hollywood</Link>
        <Link to="/fitness" className='flinks'>Fitness</Link>
        <Link to="/food" className='flinks'>Food</Link>
        </div>
        </div>
      </footer>
    </>
  )
}

export default Footer