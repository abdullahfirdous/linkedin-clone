import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import InputOption from './InputOption'
import Post from './Post'
import { db } from './firebase'

// Importing Icons

import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'

function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     db.collection('posts').onSnapshot((snapshot) =>
    //         setPosts(
    //             snapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 data: doc.data(),
    //             }))
    //         )
    //     )
    // }, [])

    const sendPost = (e) => {
        e.preventDefault()

        // db.collection('posts').add({
        //     name: 'Abdullah',
        //     description: 'this is a test',
        //     message: input,
        //     photoUrl: ''
        //     Timestamp:
        // })
    }

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type='text'
                            placeholder='Start a post'
                        />
                        <button onClick={sendPost} type='submit'>
                            Send
                        </button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption
                        Icon={ImageIcon}
                        title='Photo'
                        color='#378FE9'
                    />
                    <InputOption
                        Icon={SubscriptionsIcon}
                        title='Video'
                        color='#5F9B41'
                    />
                    <InputOption
                        Icon={CalendarViewDayIcon}
                        title='Write article'
                        color='#E06847'
                    />
                </div>
            </div>

            {/* Posts */}
            {posts.map((post) => (
                <Post />
            ))}

            <Post
                name='Abdullah Firdous'
                description='This is a test '
                message='WOW this worked'
            />
        </div>
    )
}

export default Feed
