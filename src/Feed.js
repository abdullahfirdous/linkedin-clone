import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'

import { db } from './firebase' // Import the database object correctly
import {
    collection,
    onSnapshot,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
} from 'firebase/firestore' // Correct modular imports

// Importing Icons
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Feed() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // Reference to the "posts" collection
        const postsRef = collection(db, 'posts')

        // Create a query to order posts by timestamp (descending)
        const postsQuery = query(postsRef, orderBy('Timestamp', 'desc'))

        // Listening to real-time updates from Firestore
        const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        })

        // Cleanup listener on component unmount
        return () => unsubscribe()
    }, [])

    const sendPost = async (e) => {
        e.preventDefault()

        try {
            // Adding new post to Firestore
            await addDoc(collection(db, 'posts'), {
                name: user.displayName,
                description: user.email,
                message: input,
                photoUrl: user.photoUrl || '',
                Timestamp: serverTimestamp(), // Correct use of serverTimestamp
            })

            setInput('') // Clear the input after sending
        } catch (error) {
            console.error('Error adding document: ', error)
        }
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
            {posts.map(
                ({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                )
            )}
        </div>
    )
}

export default Feed
