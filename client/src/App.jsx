import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import ChatBox from './components/ChatBox'
import Credits from './pages/Credits'
import Community from './pages/Community'
import { assets } from './assets/assets'
import { useState } from 'react'
import './assets/prism.css'
import Loading from './pages/Loading'
import Login from './pages/Login'
import { useAppContext } from './context/AppContext'

const App = () => {
  const {user} = useAppContext();

  const [isMenueOpen, setIsMenueOpen] = useState(false)
  
  
  const {pathname} = useLocation()

  if(pathname === '/loading') return <Loading/>



  return (
    <>
    {!isMenueOpen && <img src={assets.menu_icon} className='absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert' onClick={()=>setIsMenueOpen(true)}></img>}

    {user ? (
       <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white'>
        <div className='flex h-screen w-screen'>
          <Sidebar isMenueOpen={isMenueOpen} setIsMenueOpen={setIsMenueOpen} />
          <Routes>
            <Route path='/' element={<ChatBox />} />
            <Route path='/credits' element={<Credits />} />
            <Route path='/community' element={<Community />} />
            <Route path='/login' element={<Login />} />

          </Routes>
        </div>

    </div>
    ) : (
      <div className='flex h-screen w-screen justify-center items-center bg-gradient-to-b from-[#242124] to-[#000000]  '>
        <Login/>
      </div>
    )}
   

    
    </>
  )
}

export default App