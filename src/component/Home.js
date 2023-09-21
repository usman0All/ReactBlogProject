import React, { useContext } from 'react'
import { Store } from './DataStore';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
function Home() {
  const [DData] = useContext(Store);
  // console.log("holly",DData)
  return (
    <>
      <div className='frontimg'>
        {DData.filter((item) => item.id === 0).map((data, index) => {
          return (
            <div key={index} className='HomeImg'>
              <div className='img1'><img src={data.img1} alt="Not found" className='img1' /></div>
              <di>
                <div className='img2'><img src={data.img2} alt="Not found" className='img2' /></div>
                <div className='img3'><img src={data.img3} alt="Not found" className='img3' /></div>
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
          {DData.filter((item) => { return (item.id === 22 || item.id === 33 || item.id === 44) }).map((data, index) => {
            return (
              <NavLink to={`/Dcontent/${data.id}`} className="Dynamiclink">
              <div className='latestP1' key={index}>
                <div className='latestimg'>
                  <img className="latestimg" src={data.image} alt='Not found' />
                  <div>{data.description.slice(0,80)}</div>
                </div>

              </div>
              </NavLink>

            )
          })
          }
        </div>
      </div>
      {/* //////////////////latest Home end  /////////////// */}
      <div className='lArticle'>
        <div className='latestH'>
          <h1>Latest Article</h1>
          <hr className='hr1' />
       </div>
       <div className='articleP'>
          <div className='article'>
            {DData.filter((item) => item.id % 11 === 2).map((data, index) => {
              return (
                <div className='latestP1' key={index}>
                  <div className='latestimg'>
                    <img className="latestimg" src={data.image} alt='Not found' />
                    <div>{data.description.slice(0, 20)}</div>
                  </div>
                </div>
              )
            })
            }
 </div>
          {/* <div className='Add'>
            <di>Advertisement</di>

          </div> */}
          {/* right */}

          <div className='topleft'>
          <div className='Add'>
            <div>Advertisement</div>
          </div>

          <h1>Top Posts</h1>
          <hr className='hr1' />

          {/* big image */}
          <div className="parent2">

            {DData.filter((item) => item.id === 45).map((data, index) => {
              return (
                <>
                  {/* making dynamic link*/}
                  <NavLink to={`/Dcontent/${data.id}`} className="Dynamiclink">
                    <div className='container2' key={index}>
                      <div className='cont-img2'>
                        <img className="leftImg" src={data.image} alt='Not found' />
                      </div>
                      <div className='heading2' style={{ fontWeight: "bold" }}>{data.heading.slice(0, 30)}</div><div className='number1'>{index + 1}</div>
                      <div className='des2'>{data.description.slice(0, 18)}</div>
                    </div>
                  </NavLink>
                </>
              )

            })

            }
          </div>
          {/* big image end */}










          {/* left side parent3 */}

          {DData.filter((item) =>item.id%10===2).map((data, index) => {
            return (
              <div key={index}>
                {/* making dynamic link*/}
                <NavLink to={`/Dcontent/${data.id}`} className="Dynamiclink">
                <div className='container3'>
                <div className='cont-img3'>
                    <img className="leftimg3" src={data.image} alt='Not found' />
                  </div>

                 <div className='heading3'>{data.heading.slice(0,16)} </div><div className='number2'>{index + 2}</div>
                  {/* <div className='des3'>{data.description.slice(0, 3)}</div>  */}
                </div>
                </NavLink>
              </div>
              )
              })
          }

        </div>
      </div>
       

      
    </div>
      {/* footer */}
      <Footer />

    </>
  )
}
export default Home



