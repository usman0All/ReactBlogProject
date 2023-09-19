import React from 'react'
import "./Footer.css"
import i1 from "../image/f.png"
import i2 from "../image/i.png"
import i3 from "../image/f.png"
import i4 from "../image/w.png"
import i5 from "../image//smartphone-call.png"
import i6 from "../image//social.png"
import i7 from "../image/home.png";
import i8 from "../image/paper-plane.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className='footer'>

        {/* //////s1/////// */}
        <div className='section'>
          <div className='homeicon'>
            <div><Link to="/" className='soclinks'><img src={i7} alt='Not found' className='icon' style={{ width: 40, height: 40 }} /></Link></div>
            <h3>The Siren</h3>
          </div>
          <div className='flink'>
            <h5>Welcome to our The Siren Blog. Here we talk about education, Ai,Technology and eat healthy and
              simple vegetarian food with natural ingredients,
              whole grains, good fats, fruit and vegetables</h5>
          </div>
          <div className='homewrite'>
          <div><Link to="/" className='soclinks'><img src={i8} alt='Not found' className='icon' style={{ width:20, height:20 }} /></Link></div>
            <h5>sirenblog@gmail.com</h5>
          </div>

        </div>
        {/* s2 */}

        <div className='section'>
          <h3>Activity</h3>
          <div className='aflink'>
            <div className='flinks'>Influencer</div>
            <div className='flinks'>Co-branding</div>
            <div className='flinks'>Honar</div>
            <div className='flinks'>Giveway</div>
          </div>
        </div>

        {/* ///s3//// */}

        <div className='section'>
          <h3 >Follow Us</h3>
          <div className='soclink'>
            <Link to="/" className='soclinks'><img src={i1} alt='Not found' className='icon' style={{ width: 40, height: 40 }} /></Link>
            <Link to="/bollywood" className='soclinks'> <img src={i2} alt='Not found' className='icon' style={{ width: 40, height: 40 }} /></Link>
            <Link to="/technology" className='soclinks'><img src={i3} alt='Not found' className='icon' style={{ width: 40, height: 40 }} /></Link>
            <Link to="/hollywood" className='soclinks' ><img src={i4} alt='Not found' className='icon' style={{ width: 40, height: 40 }} /></Link>
          </div>
          <div className="phone">
            <div><img src={i5} alt='Not found' className='icon' style={{ width: 40, height: 40 }} /></div>
            <div>19+7334756789</div>
          </div>
          <div className="email">
            <div><img src={i6} alt='Not found' className='icon' style={{ width: 30, height: 30 }} /></div>
            <div>usman@gmail.com</div>
          </div>

        </div>
        {/* /////s4/// */}

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