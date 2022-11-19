import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { PostType } from '../types'
import { NextPage } from 'next'
import Link from 'next/link'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'

interface IProps {
    post: PostType
}

const Post: NextPage<IProps> = ({ post }) => {

  const [isHover, setIsHover] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if(playing) {
        videoRef?.current?.pause();
        setPlaying(false)
    } else {
        videoRef?.current?.play();
        setPlaying(true)
    }
  }

  useEffect(() => {
    if(videoRef?.current) {
        videoRef.current.muted = isVideoMuted;
    }
  }, [isVideoMuted])

  return (
    <div className='w-60 rounded-xl bg-base-200 bg-opacity-90'>
        <Link href={`/${post.postedBy.userName}`}>
            <div className='h-14 flex items-center justify-start gap-6 mx-2 cursor-pointer'>
                <Image src={post.postedBy.image} width={30} height={30}></Image>
                <h2 className='font-semibold'>{post.postedBy.userName}</h2>
            </div>
        </Link>
        
        {post.image && (
            <div className=''>
                <Image src={post.image.asset.url} layout="responsive" width={48} height={30}/>
            </div>
        )}

        {post.video && (
            <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='rounded-3xl relative'>
                <video ref={videoRef} loop src={post.video.asset.url}>
                </video>

                {isHover && (
                    <div className='absolute bottom-1 w-full'>
                            {playing ? (
                                <button onClick={onVideoPress}>
                                    <BsFillPauseFill className='ml-4 mr-10 text-black text-2xl lg:text-4xl' />
                                </button>
                            ) : 
                                <button onClick={onVideoPress}>
                                    <BsFillPlayFill  className='ml-4 mr-10 text-black text-2xl lg:text-4xl'/>
                                </button>
                            }
                            {isVideoMuted ? (
                                <button onClick={() => setIsVideoMuted(false)}>
                                    <HiVolumeOff className='text-black text-2xl lg:text-4xl' />
                                </button>
                            ) : 
                                <button onClick={() => setIsVideoMuted(true)}>
                                    <HiVolumeUp  className='text-black text-2xl lg:text-4xl'/>
                                </button>
                            }
                    </div>
                )}
            </div>
        )}
        
        <div>
            ffsannsfa
        </div>
    </div>
  )
}

export default Post