import React from 'react'
import Image from 'next/image'
import { Video, ImageType } from '../types'
import { NextPage } from 'next'

interface IProps {
    post: Video
}

const Post: NextPage<IProps> = ({ post }) => {
    console.log(post)

  return (
    <div>
        {post.image && (
            <div className='w-20 h-20'>
                <Image src={post.image.asset.url} layout="responsive" width={48} height={30}/>
            </div>
        )}

        {post.video && (
            <video src={post.video.asset.url} className="w-60 h-60">

            </video>
        )}
    </div>
  )
}

export default Post