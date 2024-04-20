import React from "react";
import { Link } from "react-router-dom";

function Rust() {
  return (
    <div>
      <header className="bg-gradient-to-r from-yellow-600 to-yellow-300 h-10 w-full p-3 flex justify-center items-center">
        <div style={{ color: 'white' }}>
          <h2>
            <Link to="/photos" style={{ textDecoration: 'none', color: 'black' }}>
             Rust
             <span style={{ position: 'absolute', left: 0, top: 0, visibility: 'hidden' }}>Rust</span>
            </Link>
          </h2>
        </div>
      </header>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
      <img className='img9' src='/images/IMG_0278.JPG' alt='' style={{ margin: '3px' }}/>
      <img className='img9' src='/images/IMG_0273.JPG' alt='' style={{ margin: '3px' }}/>
      <img className='img9' src='/images/IMG_0388.JPG' alt='' style={{ margin: '3px' }}/>
      <img className='img9' src='/images/IMG_0898.JPG' alt='' style={{ margin: '3px' }}/>
      <img className='img9' src='/images/IMG_1075.JPG' alt='' style={{ margin: '3px' }}/>
    </div>
    </div >
  );
}

export default Rust;
