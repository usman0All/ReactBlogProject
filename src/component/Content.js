import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { Store } from './DataStore'
function Content() {
  const Cid=useParams().Id
  console.log(Cid);
  const[DData]=useContext(Store)
  return (
    <div className='dynamicData'>
    {Cid}
    {DData.filter((item)=>item.id===Cid).map((data,index)=>{
      return(
      <div key={index}>
          <div className='title'>{data.heading}</div>
      </div>)
    })} 

    </div>
  )
}

export default Content