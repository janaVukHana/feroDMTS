// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import styled from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import { useStateContext } from './context/ContextProvider'
import './App.css'
// Pages
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import ScrollToTop from './components/ScrollToTop'
import Home from './views/Home'
import Contact from './views/Contact'
import AboutUs from './views/AboutUs'
import Artikli from './views/Artikli'
import Htz from './views/artikli/Htz'
import Alat from './views/artikli/Alat'
import Ekseri from './views/artikli/Ekseri'
import ElektroMaterijal from './views/artikli/ElektroMaterijal'
import Moleraj from './views/artikli/Moleraj'
import Plastika from './views/artikli/Plastika'
import Srafovi from './views/artikli/Srafovi'
import Stolarija from './views/artikli/Stolarija'
import Stubovi from './views/artikli/Stubovi'
import Basta from './views/artikli/Basta'
import Varenje from './views/artikli/Varenje'
import Zica from './views/artikli/Zica'

// const Container = styled.div`
//   height: 100%;
//   background-color: red;
// `

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artikli" element={<Artikli />} />
            <Route path="/onama" element={<AboutUs />} />
            <Route path="/kontakt" element={<Contact />} />
            {/* Artikli */}
            <Route path="/alat" element={<Alat />} />
            <Route path="/ekseri" element={<Ekseri />} />
            <Route path="/elektro" element={<ElektroMaterijal />} />
            <Route path="/htz" element={<Htz />} />
            <Route path="/moleraj" element={<Moleraj />} />
            <Route path="/plastika" element={<Plastika />} />
            <Route path="/srafovi" element={<Srafovi />} />
            <Route path="/stolarija" element={<Stolarija />} />
            <Route path="/stubovi" element={<Stubovi />} />
            <Route path="/basta" element={<Basta />} />
            <Route path="/varenje" element={<Varenje />} />
            <Route path="/zice" element={<Zica />} />
            
            
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
      {/* {notification && <p className='notification'>{notification}</p>} */}

    </div>
  )
}

export default App
