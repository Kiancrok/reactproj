import React, { useState, useEffect } from "react"

function Home() {
    const [count, setCount] = useState(0)
  
    return (
  
      
      <>
      <div  style={{ color: 'white' }}>
      <h1> This is Nigel my project car</h1>
      <p> He has quite a lot of problems and holes at the moment but i am working on fixing him up and making him road worthy once again</p>
     
      <img className='img0' src='/images/IMG_0180.JPG' alt='' />
      <img className='img1' src='/images/IMG_0181.JPG' alt='' />
      <img className='img2' src='/images/IMG_E1092.JPG' alt=''/>
      <img className='img3' src='/images/IMG_0285.JPG' alt=''/>
        
        <h2 className='holes'>How many holes does Nigel have</h2>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          </div>
        </div>
        <p className='nigel'> nigel is the best car ever</p>
        </>

        )
}

export default Home
