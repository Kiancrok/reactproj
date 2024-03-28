import React from "react"
import {Outlet, Link} from "react-router-dom"

export default function GuestLayout() {
  return (
    <>
     <header className="bg-gradient-to-r from-yellow-600 to-yellow-300 h-20 w-full p-3 flex justify-between items-center">
            <div>
                <h1 className="text-2xl text-black">Nigel The Project Car</h1>
            </div>

            <ul className='flex items-center gap-2 text-white'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/Todo">To do</Link>
                </li>
                <li>
                <Link to="/Videos">Videos</Link>
                </li>
                <li>
                <Link to="/Photos">Photos</Link>
                </li>
                <li>
                <Link to="/Quiz">Quiz</Link>
                </li>
            </ul>
     </header>

     <Outlet />
    </>
  )
}