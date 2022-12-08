import React, { Dispatch, SetStateAction, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo.png'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { createOrGetUser } from '../utils';
import useAuthStore from '../auth/authStore';
import { AiOutlineLogout } from 'react-icons/ai'


interface IProps {
    darkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ darkMode, setDarkMode }: IProps) => {
  
  const { user, addUser, removeUser } = useAuthStore()

  useEffect(() => {
    const systemTheme = matchMedia("(prefers-color-scheme: dark)").matches;

    if (systemTheme) {
      setDarkMode(true);
    } else {
      setDarkMode(false)
    }

  }, [])

  return (
    <div className='flex justify-between items-center -mt-6 md:-mt-10 md:mx-4 mx-2'>
        <Link href="/">
            <div className='w-[180px] md:w-[230px] cursor-pointer -ml-2'>
                <Image src={Logo} alt="Beam" layout="responsive"/>
            </div>
        </Link>

        <div className="form-control md:block hidden">
          <div className="input-group">
            <input type="text" placeholder="Search…" className="input input-bordered" />
            <button className="btn btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
        
        {user ? <div className='flex gap-8 items-center'>
          <Link href="/upload">
            <button className='btn btn-primary cursor-pointer'>
                UPLOAD
            </button>
          </Link>
          <Link href="/account">
            <Image width={42} height={42} src={user.image} className="cursor-pointer rounded-full"/>
          </Link>
            
            <button onClick={() => {
              googleLogout()
              removeUser()
              }} className='flex justify-center items-center btn rounded-full border-[1px] shadow-md'>
              <AiOutlineLogout color="red" fontSize={18}/>
            </button>
            
          </div>

        : <div className='flex gap-6 items-center'>
            <GoogleLogin
              onSuccess={(response) => {
                createOrGetUser(response, addUser)
                }
              }
              onError={() => removeUser()}
            />
            <button onClick={() => {
              setDarkMode((prev: boolean) => !prev);
              }} className={`btn btn-primary cursor-pointer rounded-full mr-4 `}>
              {darkMode ? <BsFillMoonStarsFill className='text-gray-300 md:h-6 md:w-6 w-4 h-4' /> :
              <BsFillSunFill className='md:h-6 md:w-6 w-4 h-4' />}
            </button>
          </div>
        }
      </div>
  )
}

export default Navbar;
