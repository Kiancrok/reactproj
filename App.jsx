// App.jsx
import GuestLayout from "./layout/GuestLayout"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import "./App.css"
import Todo from "./pages/Todo"
import Photos from "./pages/Photos"
import Brakes from "./pages/Brakes"
import Rust from "./pages/Rust"
import Videos from "./pages/Videos"
import Quiz from "./pages/Quiz"
import Interior from "./pages/Interior"

function App() {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<Home />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Videos" element={<Videos/>}/>
        <Route path="/Quiz" element={<Quiz/>}/>
        <Route path="/Photos/*" element={<Photos />} />
      </Route>
      <Route path="/photos/*" element={<Photos />} /> {/* This route is for /photos and all its children */}
      <Route path="/photos/brakes" element={<Brakes />} />
      <Route path="/photos/rust" element={<Rust />} />
      <Route path="/photos/interior" element={<Interior />} />
    </Routes>
  )
}

export default App
