import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
//import { useEffect } from 'react';
import { Store } from './DataStore'
function Bollywood() {
  const [DData] = useContext(Store);
  return (
    <>
      {/*/////////////////////////// main ///////////////////////////////// */}
      <div className='main-container'>
        {/*/////// parent1/////// */}

        <div className='parent1'>
          <h1>Bollywood</h1>
          <hr className='hr1' />

          {DData.filter((item) => item.id >= 1 && item.id <= 10).map((data,index) => {
            return (
              <>
                <div key={index} className='container1'>
                <NavLink to={'/Dcontent/${item.id'}>

                  <div className='heading1'>{data.heading.slice(0, 50)}</div>
                  <div className='cont-img1'>
                    <img className="imgData" src={data.image} alt='Not found' />
                  </div>
                  <div className='des1'>{data.description.slice(0, 70)}...</div>
                 
                  <div className='date1'><span style={{ fontWeight: "bold" }}>Post</span>August 21,2009</div>
                  </NavLink>
                </div>

              </>
            )
          })
          }
        </div>
        {/* parent1 end */}

        {/*parent 2 */}
        <div className='parent2'>
          <h1>Top Posts</h1>
          <hr className='hr1' />

          {/* big image */}
          <div className='topleft'>
            {DData.filter((item) => item.id === 1).map((data,index) => {
              return (
                <>
                  <div className='container2'>
                    <div className='cont-img2'>
                      <img className="img2" src={data.image} alt='Not found' />
                    </div>
                    <div className='heading2' style={{ fontWeight: "bold" }}>{data.heading}<div className='number1'>{index+1}</div></div>
                    {/* <div className='des2'>{data.description.slice(0, 3)}</div> */}
                  </div>
                  </>
              )

            })

            }
          </div>
          {/* big image end */}












          {DData.filter((item) => item.id >= 6 && item.id <= 10).map((data,index) => {
            return (
              <div key={index}>
                <div className='container3'>

                  <div className='heading3'>{data.heading.slice(0,30)} <div className='number2'>{index+2}</div></div>
                  <div className='cont-img3'>
                    <img className="img3" src={data.image} alt='Not found' />
                  </div>
                  {/* <div className='des3'>{data.description.slice(0, 3)}</div>  */}
                </div>

              </div>
            )

          })
          }

            <div className='Add'>
               <div>Advertisement</div>
            </div>
        </div>
        {/* parent2 end*/}


      </div>
      {/* main end */}
    </>
  )
}

export default Bollywood