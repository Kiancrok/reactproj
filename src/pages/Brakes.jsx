import React from "react";
import { Link } from "react-router-dom";

function Brakes() {
  return (
    <div>
      <header className="bg-gradient-to-r from-yellow-600 to-yellow-300 h-10 w-full p-3 flex justify-center items-center">
        <div style={{ color: 'white' }}>
          <h2>
            <Link to="/photos" style={{ textDecoration: 'none', color: 'black', position: 'relative' }}>
              Brakes
              <span style={{ position: 'absolute', left: 0, top: 0, visibility: 'hidden' }}>Brakes</span>
            </Link>
          </h2>
        </div>
      </header>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <img className='img9' src='/images/IMG_0432.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0455.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0474.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0492.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0523.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0547.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0552.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0564.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0665.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0675.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0691.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0723.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0730.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0733.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0739.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0847.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0756.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0798.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0801.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0872.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0938.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0958.JPG' alt='' style={{ margin: '3px' }} />
        <img className='img9' src='/images/IMG_0971.JPG' alt='' style={{ margin: '3px' }} />
      </div>
    </div>
  );
}

export default Brakes;
