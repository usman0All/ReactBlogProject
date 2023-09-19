import React from 'react'
import './Content.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Store } from './DataStore'
import image from "../image/ava4.png"
import i1 from "../image/f.png"
import i2 from "../image/i.png"
import i3 from "../image/f.png"
import i4 from "../image/w.png"
function Content() {
  const Cid=useParams().Id
  console.log("dynamic id",Cid);
  const[DData]=useContext(Store)
  return (
    <div className='dynamicData'>
    {DData.filter((item)=>item.id===parseInt(Cid)).map((data,index)=>{
      return(
      <div key={index} >
          <h1 className='dhead'>{data.heading.slice(0,50)}</h1>
          <div className='user' >
            
            <img src={image} alt='Not found' className='userimg'/>
            <div className='userid'>
            <span>Mohd Usman</span>
             <span>jan-25/2019</span>
            </div>
            <div className='smedia'>
               <img src={i1} alt='Not found' className='icon'/>
               <img src={i2}  alt='Not found' className='icon'/>
               <img src={i3}   alt='Not found' className='icon'/>
               <img src={i4}  alt='Not found' className='icon'/>
             </div>
          </div>
          <div className='Dimgbox'>
          <img src={data.image} className="Dimg" alt="Not found"/>
          </div>
          <p>{data.description.slice(0,50)}</p>
      </div>)
    })} 

    </div>
  )
}

export default Content