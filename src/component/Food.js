import React, { useContext } from 'react'
//import { useEffect } from 'react';
import { Store } from './DataStore'
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
function Food() {
  const [DData] = useContext(Store);
  return (
    <>
      {/*/////////////////////////// main ///////////////////////////////// */}
      <div className='main-container'>
        {/*/////// parent1/////// */}

        <div className='parent1'>
        <div>
        <h1>Food</h1>
          <hr className='hr1' />
        </div>

          {DData.filter((item) => item.id>=54&&item.id<=60).map((data) => {
            return (
              <>
              <NavLink to={`/Dcontent/${data.id}`} className="Dynamiclink">
                <div className='container1'>

                  <div className='heading1'>{data.heading.slice(0, 50)}</div>
                  <div className='cont-img1'>
                    <img className="imgData" src={data.image} alt='Not found' />
                  </div>
                  <div className='des1'>{data.description.slice(0, 70)}...</div>
                  <div className='date1'><span style={{ fontWeight: "bold" }}>Post</span>August 21,2009</div>
                </div>
                </NavLink>

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
            {DData.filter((item) => item.id ===66).map((data,index) => {
              return (
                <>
                <NavLink to={`/Dcontent/${data.id}`} className="Dynamiclink">
                  <div className='container2' key={index}>
                    <div className='cont-img2'>
                      <img className="leftImg" src={data.image} alt='Not found' />
                    </div>
                    <div className='heading2' style={{ fontWeight: "bold" }}>{data.heading}<div className='number1'>{index+1}</div></div>
                    {/* <div className='des2'>{data.description.slice(0, 3)}</div> */}
                  </div>
                  </NavLink>
                  </>
              )

            })

            }
          </div>
          {/* big image end */}












          {DData.filter((item) => item.id >=60&& item.id <= 64).map((data,index) => {
            return (
              <div key={index}>
              <NavLink to={`/Dcontent/${data.id}`} className="Dynamiclink">

                <div className='container3'>
                <div className='cont-img3'>
                    <img className="leftimg3" src={data.image} alt='Not found' />
                  </div>

                  <div className='heading3'>{data.heading.slice(0,30)} </div><div className='number2'>{index+2}</div>
                 
                  {/* <div className='des3'>{data.description.slice(0, 3)}</div>  */}
                </div>
                </NavLink>

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
       {/* footer section  */}

       <Footer/>
    </>
  )
}

export default Food