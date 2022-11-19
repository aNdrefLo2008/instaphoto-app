import React, { useState } from 'react'
import Link from 'next/link'
import { FaRegCompass } from 'react-icons/fa'
import SuggestedAccounts from './SuggestedAccounts'
import Footer from './Footer'

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div className={`${showSidebar ? 'border-r-2' : ''} border-gray-200 flex flex-col `}>
        <div className='m-2 ml-4 text-xl items-center'
            onClick={() => setShowSidebar(prev => !prev)}
        >
            
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                {showSidebar ? <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                 : <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>}
            </label>
            
        </div>
        {showSidebar && (
            <div className='m-2 ml-4 mt-2 xl:w-40 w-20 flex flex-col justify-start mb-10 p-3'>
                <div className='xl:border-b-2 border-gray-200 xl:pb-2'>
                    <Link href="/">
                        <div className='flex'>
                            <p className='mr-4 text-2xl rounded-full btn btn-ghost btn-circle'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            </p>
                            <span className='mt-[7px] text-xl hidden xl:block'>
                                For You
                            </span>
                        </div>
                    </Link>
                </div>
                <div className='mr-10'>
                    <div className='btn btn-ghost btn-circle'>
                        <Link href="/discovery">
                            <FaRegCompass className='w-6 h-6 cursor-pointer my-2'/>
                        </Link>
                    </div>
                    <SuggestedAccounts />
                    <Footer />
                </div>
            </div>
        )}
    </div>
  )
}

export default Sidebar