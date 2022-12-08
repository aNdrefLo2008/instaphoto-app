import { useState, useEffect } from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import { GoogleOAuthProvider } from '@react-oauth/google';

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', `${darkMode ? 'dark' : 'light'}`)
  }, [darkMode])

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='flex gap-2 -mt-2'>
        <div className='md:block hidden w-[20%]'>
          <Sidebar />
        </div>
        <div className='w-[80%] lg:w-[70%] md:-ml-20 flex flex-col justify-center'>
          <Component {...pageProps}/>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default MyApp
