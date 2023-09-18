import React, { useContext } from 'react'
//import { useEffect } from 'react';
import { Store } from './DataStore'
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
                <div className='container1'>

                  <div className='heading1'>{data.heading.slice(0, 50)}</div>
                  <div className='cont-img1'>
                    <img className="imgData" src={data.image} alt='Not found' />
                  </div>
                  <div className='des1'>{data.description.slice(0, 70)}...</div>
                  <div className='date1'><span style={{ fontWeight: "bold" }}>Post</span>August 21,2009</div>
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
            {DData.filter((item) => item.id ===61 ).map((data,index) => {
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












          {DData.filter((item) => item.id >=62 && item.id <= 66).map((data,index) => {
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

export default Food