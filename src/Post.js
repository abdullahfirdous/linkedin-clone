import React from 'react'
import './App.css'
import InputOption from './InputOption'

import { Avatar } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import CommentIcon from '@mui/icons-material/Comment'
import RepeatIcon from '@mui/icons-material/Repeat'
import SendIcon from '@mui/icons-material/Send'

function Post({ name, description, message, photoUrl }) {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar />
                <div className='post__info'>
                    <h2> {name} </h2>
                    <p> {description} </p>
                </div>
            </div>

            <div className='post__body'>
                <p> {message} </p>
            </div>

            <div className='post__buttons'>
                <InputOption
                    Icon={ThumbUpOffAltIcon}
                    title='Like'
                    color='#000000BF'
                />
                <InputOption
                    Icon={CommentIcon}
                    title='Comment'
                    color='#000000BF'
                />
                <InputOption
                    Icon={RepeatIcon}
                    title='Repost'
                    color='#000000BF'
                />
                <InputOption Icon={SendIcon} title='Send' color='#000000BF' />
            </div>
        </div>
    )
}

export default Post
