import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Brakes from "./Brakes";
import Rust from "./Rust";

function Photos() {
  return (
    <div>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
        <li style={{ marginRight: '10px' }}>
          <Link to="/photos/brakes"><img className='imgb' src='/images/BRAKES.jpg' alt='' /></Link>
        </li>
        <li>
          <Link to="/photos/rust"><img className='imgr' src='/images/RUST.jpg' alt='' /></Link>
        </li>
      </ul>
      <Routes>
        <Route path="/photos/brakes" element={<Brakes />} />
        <Route path="/photos/rust" element={<Rust />} />
      </Routes>    
    </div>
  );
}

export default Photos;
