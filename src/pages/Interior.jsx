import React from "react";
import { Link } from "react-router-dom";

function Interior() {
  return (
    <div>
      <header className="bg-gradient-to-r from-yellow-600 to-yellow-300 h-10 w-full p-3 flex justify-center items-center">
        <div style={{ color: 'white' }}>
          <h2>
            <Link to="/photos" style={{ textDecoration: 'none', color: 'black' }}>
             Interior
             <span style={{ position: 'absolute', left: 0, top: 0, visibility: 'hidden' }}>Interior</span>
            </Link>
          </h2>
        </div>
      </header>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
      <img className='img9' src='/images/IMG_1105.JPG' alt='' style={{ margin: '3px' }}/>
      <img className='img9' src='/images/IMG_E1095.JPG' alt='' style={{ margin: '3px' }}/>
    </div>
    </div >
  );
}

export default Interior;