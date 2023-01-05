import React, { useState, useEffect } from 'react'
import { MdFavorite } from 'react-icons/md'

import useAuthStore from '../auth/authStore'

interface IProps {
    handleLike: () => void;
    handleDislike: () => void,
    likes: any[],
}

function LikeButton({ likes, handleLike, handleDislike }: IProps) {
    const [alreadyLiked, setAlreadyLiked] = useState(false)
    const { userProfile }: any = useAuthStore()
    const filterLikes = likes?.filter(item => item._ref === userProfile?._id)

    console.log(likes)

    useEffect(() => {
        if(filterLikes?.length > 0) {
            setAlreadyLiked(true);
        } else {
            setAlreadyLiked(false)
        }
    }, [filterLikes, likes])

  return (
    <div>
        <div className='flex flex-col justify-center items-center cursor-pointer'>
            {alreadyLiked ? (
                <div onClick={handleDislike} className='rounded-full p-2 md:p-4 text-[#F51997]'>
                    <MdFavorite className='text-xl md:text-3xl text-[#F51997]'/>
                </div>
            ) : (
                <div onClick={handleLike} className='rounded-full p-2 md:p-4'>
                    <MdFavorite className='text-xl md:text-3xl'/>
                </div>
            )}
            <p className='font-semibold'>{likes?.length || 0}</p>
        </div>
    </div>
  )
}

export default LikeButton