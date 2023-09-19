import React, { useContext } from 'react'
import { Store } from './DataStore';
import Footer from './Footer';
function Home() {
  const[DData]=useContext(Store);
   // console.log("holly",DData)
   return (
    <>
    <div className='frontimg'>
    {DData.filter((item)=>item.id===0).map((data,index)=>{
      return(
        <div key={index} className='HomeImg'>
          <div className='img1'><img src={data.img1} alt="Not found"className='img1' /></div>
          <di>
           <div className='img2'><img src={data.img2} alt="Not found" className='img2'/></div>
           <div className='img3'><img src={data.img3} alt="Not found" className='img3'/></div>
          </di>
        </div>
      )
    })}
    </div>

{/* //////////////////Home latest///////////////////// */}
    <div className='HomeLatest'>
    <div className='latestH'>
     <h1>The Latest </h1>
     <hr className='hr1' />
    </div>
      <div className='latestP'>
       {DData.filter((item)=>{return(item.id===44||item.id===30||item.id===45)}).map((data,index)=> {
            return (
              <div className='latestP1' key={index}>
              <div className='latestimg'>
              <img className="latestimg" src={data.image} alt='Not found' />
              <div>{data.description.slice(0,10)}</div>
              </div>
              
              </div>
                
              )
            })
          }
        </div>  
        </div>
        {/* //////////////////latest Home end  /////////////// */}
        <div className='lArticle'>
          <div  className='latestH'>
          <h1>Latest Article</h1>
          <hr className='hr1' />
          </div>

          <div className='articleP'>
          <div className='article'>
          {DData.filter((item)=>item.id%13===0).map((data,index)=> {
            return (
              <div className='latestP1' key={index}>
                 <div className='latestimg'>
                    <img className="latestimg" src={data.image} alt='Not found' />
                    <div>{data.description.slice(0,10)}</div>
                  </div>
              </div>
              )
            })
          }
          </div>
          <div className='Add'>
            <di>Advertisement</di>
          </div>
        </div>
          
          
          
        </div>
        {/* footer */}
        <Footer/>

      </>
  )
  }
  export default Home



