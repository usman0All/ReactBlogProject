import React, { useContext } from 'react'
import { Store } from './DataStore';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import LinkCompo  from "./LinkCompo"
function Home() {
  const [DData] = useContext(Store);
  // console.log("holly",DData)
  return (
    <>
    <LinkCompo/>
    <div className='home-container'>
    
    {/* 3img */}
      <div className='frontimg'>
        {DData.filter((item) => item.id === 0).map((data, index) => {
          return (
            <div key={index} className='HomeImg'>
              <div className='img1'><img src={data.img1} alt="Not found" className='img1' /></div>
              <div className='img2cont'>
                <div className='img2'><img src={data.img2} alt="Not found" className='img2' /></div>
                <div className='img3'><img src={data.img3} alt="Not found" className='img3' /></div>
              </div>
            </div>
          )   
        })}
      </div>
      {/* 3img */}

      {/* //////////////////Home latest///////////////////// */}
      <div className='HomeLatest'>
        <div className='latestH'>
          <h1>The Latest </h1>
          <hr className='hr1' />
        </div>
        <div className='latestP'>
          {DData.filter((item) => { return (item.id === 21|| item.id === 61|| item.id === 51) }).map((data, index) => {
            return (
              <NavLink to={`/Dcontent/${data.id}`} className="Dynamiclink">
              <div className='latestP1' key={index}>
                <div className='latestimg'>
                  <img className="latestimg" src={data.image} alt='Not found' />
                 </div>
                 <h4 className='ldes'>{data.description.slice(0,30)}</h4>

              </div>
              </NavLink>

            )
          })
          }
        </div>
      </div>
      {/* //////////////////latest Home end  /////////////// */}

      
      {/* ///////latest Article/////// */}
      
      
      
      <div className='lArticle'>


      <div className='parent1'>
      {/* latest */}
          <h1>The Articles</h1>
          <hr className='hr1' />
           {DData.filter((item) =>item.id===5||item.id===15||item.id===25||item.id===35||item.id===55||item.id===65||item.id===1||item.id===45).map((data, index) => {
            return (
              <>
                <div key={index} className='container1'>
                  {/* making dynamic link*/}
                  <NavLink to={`/Dcontent/${data.id}`} className="Dynamiclink">

                    <div className='heading1'>{data.heading.slice(0, 40)}</div>
                    <div className='cont-img1'>
                      <img className="imgData" src={data.image} alt='Not found' />
                    </div>
                    <div className='des1'>{data.description.slice(0, 60)}...</div>

                    <div className='date1'><span style={{ fontWeight: "bold" }}>Post</span>August 21,2009</div>
                    {/* dd */}
                  </NavLink>
                </div>

              </>
            )
          })
          }
        </div>
        {/* parent 2 */}
        <div className='parent2'>
        <div className='Add'>
            <div>Advertisement</div>
          </div>
          <h1>Top Posts</h1>
          <hr className='hr1' />

          {/* big image */}
          <div className='topleft'>

            {DData.filter((item) => item.id ===56).map((data, index) => {
              return (
                <>
                  {/* making dynamic link*/}
                  <NavLink to={`/Dcontent/${data.id}`} className="Dynamiclink">
                    <div className='container2' key={index}>
                      <div className='cont-img2'>
                        <img className="leftImg" src={data.image} alt='Not found' />
                      </div>
                      <div className='heading2' style={{ fontWeight: "bold" }}>{data.heading.slice(0, 30)}</div><div className='number1'>{index + 1}</div>
                      <div className='des2'>{data.description.slice(0, 3)}</div>
                    </div>
                  </NavLink>
                </>
              )

            })

            }
          </div>
          {/* big image end */}










          {/* left side parent3 */}

          {DData.filter((item) =>item.id===17||item.id===25||item.id===57||item.id===62||item.id===45).map((data, index) => {
            return (
              <div key={index}>
                {/* making dynamic link*/}
                <NavLink to={`/Dcontent/${data.id}`} className="Dynamiclink">
                <div className='container3'>
                <div className='cont-img3'>
                    <img className="leftimg3" src={data.image} alt='Not found' />
                  </div>

                 <div className='heading3'>{data.heading.slice(0,20)} </div><div className='number2'>{index + 2}</div>
                  {/* <div className='des3'>{data.description.slice(0, 3)}</div>  */}
                </div>
                </NavLink>
              </div>
              )
              })
          }

        </div>

      </div>


     
          {/* right */}
     


      
      {/*?/////////// footer/////////// */}
     

{/* /////////////////////// */}
    </div>
    <Footer />
    </>
  )
}
export default Home



