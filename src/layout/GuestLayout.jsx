import React from "react"
import {Outlet, Link} from "react-router-dom"

export default function GuestLayout() {
  return (
    <div className="flex flex-col items-center justify-center">
     <header className="bg-gradient-to-r from-yellow-600 to-yellow-300 h-20 w-full p-3 flex justify-between items-center">
            <div>
                <h1 className="text-2xl text-black">Nigel The Project Car</h1>
            </div>

            <ul className='flex items-center gap-2 text-white'>
                <li>
                    <Link to="/"  className="boldLink" style={{ textDecoration: 'none', color: 'black'  }}>Home</Link>
                </li>
                <li>
                <Link to="/Todo"  className="boldLink" style={{ textDecoration: 'none', color: 'black' }}>To do</Link>
                </li>
                <li>
                <Link to="/Videos"  className="boldLink" style={{ textDecoration: 'none', color: 'black' }}>Videos</Link>
                </li>
                <li>
                <Link to="/Photos"  className="boldLink" style={{ textDecoration: 'none', color: 'black' }}>Photos</Link>
                </li>
                <li>
                <Link to="/Quiz"  className="boldLink"style={{ textDecoration: 'none', color: 'black' }}>Quiz</Link>
                </li>
            </ul>
     </header>

     <Outlet />
    </div>
  )
}