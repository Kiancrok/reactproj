import React, { useState, useEffect } from "react";

function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div style={{ color: 'white' }}>
                <h1>This is Nigel my project car</h1>
                <p>He has quite a lot of problems and holes at the moment but I am working on fixing him up and making him roadworthy once again</p>
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
                <p className='nigel'>Nigel is the best car ever</p>
                <p className='nigel'>Another place you can follow the progress of the restoration is my  {' '}
                    <a href="https://www.instagram.com/kian_croskell/" style={{ textDecoration: 'underline', color: 'white' }}>Instagram</a> {' '}
                    <a href="https://www.instagram.com/kian_croskell/">
                        <img className='insta' src='/images/insta.jpg' alt=''/>
                    </a>
                </p>
            </div>
        </>
    );
}

export default Home;

