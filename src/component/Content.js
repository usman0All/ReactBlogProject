import React from 'react'
import './Content.css'
import { NavLink, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Store } from './DataStore'
import image from "../image/ava4.png"
import i1 from "../image/f.png"
import i2 from "../image/i.png"
import i3 from "../image/f.png"
import i4 from "../image/w.png"
import like from "../image/rythm (1).svg";
import share from "../image/share (1).svg";
import LinkCompo from './LinkCompo'
import { Link } from 'react-router-dom'
function Content() {
  const Cid = useParams().Id
  // console.log("dynamic id", Cid);
  const [DData] = useContext(Store)
  const category = DData[Cid].cat;
  console.log("dynamic data based on cat", category);
  return (
    <>
    <LinkCompo/>

      {/* section 1 */}
      <div className='dynamicData1'>
        {DData.filter((item) => item.id === parseInt(Cid)).map((data, index) => {
          return (
            <>
              <div key={index} className='parentD1'>
                <h3 className='dhead'>{data.heading.slice(0, 50)}</h3>
                <div className='userP'>
                  <div className='user'>
                    <div className='userImg'><img src={image} className='userImg' alt='Not found' /></div>
                    <div><span>Mohd.Usman</span><br /><span> jan,12/2023</span></div>
                    
                  </div>
                  <div className='smedia'>
                    <span><img src={i1} className="icon" alt='Not found' /></span>
                    <span><img src={i2} className="icon" alt='Not found' /></span>
                    <span><img src={i3} className="icon" alt='Not found' /></span>
                    <span><img src={i4} className="icon" alt='Not found' /></span>
                  </div>
                </div>
                <div className='Dimgbox'>
                  <img src={data.image} className="Dimg" alt="Not found" />
                </div>
                <div className='Ddesc1'>{data.description}</div>
              </div>

            </>
          )

        })}
      </div>

      {/* like share section */}
      <div className='lsParent'>
      <div className='likeshare'>
                    <div><img src={like} className="icon" alt='Not found' />Like</div>
                    <div><img src={share} className="icon" alt='Not found' />Share this article</div>
       </div>
       
      </div>
      
      {/* like share section */}
      {/* middle section */}
      <div className='middle-sec'>     
        <div className='middle-child'>
          <div className='border-child'>
            <div className='user2'>
              <div className='userImg'><img src={image} className='userImg' alt='Not found' /></div>
              <div><span>Mohd.Usman</span><br /><span> jan,12/2023</span></div>
              <button className='back'><Link to="/" style={{textDecoration:"none"}}>Goback</Link></button>
            </div>
          </div>
        </div>
      </div>   
      {/* section2*/}
      <div className='section2'>
        <h1 className='moreFrom'>More from the Siren</h1>
        <div className='dynamicData2'>
          {DData.filter((item) => item.cat === category).slice(0, 3).map((data, index) => {
            return (
              <NavLink to={`/Dcontent/${data.id}`} className="Dynamiclink">
              <div key={index} className='parentD2'>
                <div className='Dimgbox2'>
                  <img src={data.image} className="Dimg2" alt="Not found" />
                </div>
                <h4 className='Dhea2'>{data.heading.slice(0,40)}</h4>
                <div className='user2'>
                  <div className='userImg'><img src={image} className='userImg' alt='Not found' /></div>
                  <div><span>Mohd.Usman</span><br /><span> jan,12/2023</span></div>
                </div>
              </div>
              </NavLink>
            );
          })}
        </div>
      </div>

    </>
  )
}

export default Content