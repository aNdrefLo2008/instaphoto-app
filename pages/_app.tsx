import { useState, useEffect } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', `${darkMode ? 'dark' : 'light'}`)
  }, [darkMode])

  return (
    <div className='h-screen'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='flex gap-2 -mt-2'>
        <div className='md:block hidden w-[20vh]'>
          <Sidebar />
        </div>
        <div>
          <Component {...pageProps}/>
        </div>
      </div>
    </div>
  )
}

export default MyApp
