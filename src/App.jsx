import React, { useEffect,useState } from 'react'
import './App.css'
import { FaLaptopCode, FaGithub, FaCode, FaUser } from "react-icons/fa";
import Layout from './components/Layout';

function App() {
   const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (redirect) {
    return (<Layout />); 
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-cyan-400 space-y-4">
        <FaLaptopCode className="text-6xl mb-2 animate__animated animate__fadeInDown animate__delay-1s" />

        <div className='animate__animated animate__zoomInDown'>
          <h1 className="text-2xl font-semibold tracking-wide">MY PROFILE</h1>
        </div>

        <div className="flex space-x-6 text-2xl mt-2">
          <FaGithub className="hover:text-cyan-300 cursor-pointer transition-transform duration-300 hover:scale-110 animate__animated animate__fadeInDown animate__delay-1s" />
          <FaCode className="hover:text-cyan-300 cursor-pointer transition-transform duration-300 hover:scale-110 animate__animated animate__fadeInDown animate__delay-1s" />
          <FaUser className="hover:text-cyan-300 cursor-pointer transition-transform duration-300 hover:scale-110 animate__animated animate__fadeInDown animate__delay-1s" />
        </div>

        <p className="text-sm mt-4 text-cyan-500  animate__animated animate__fadeInDown animate__delay-2s ">Designed by Raj Bavariya</p>
      </div>
    </>
  )
}

export default App
