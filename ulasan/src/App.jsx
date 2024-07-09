import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Header from './components/header/header.jsx'
import Ulasan from './page/main/ulasan.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/footer/footer.jsx'
import SeeAll from './page/see/seeAll.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ReviewProvider } from './page/context/rekap.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ReviewProvider />
      <Router>
        <Routes>
          <Route path="/" element={<Ulasan/>} />
          <Route path="/rekap-ulasan" element={<SeeAll />} />
        </Routes>
      </Router>
      <ReviewProvider />
    </>
  )
}

export default App
