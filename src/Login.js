import React, { useState } from 'react'
import './Login.css'

import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from './firebase' // Import modular functions
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const [errorMessage, setErrorMessage] = useState('') // To handle errors
    const dispatch = useDispatch()

    // Login function
    const loginToApp = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profileUrl: userAuth.user.photoURL,
                    })
                )
            })
            .catch((error) => {
                setErrorMessage(error.message) // Set error message on login failure
            })
    }

    // Register function
    const register = () => {
        if (!name) {
            return alert('Please enter a full name!')
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                // Handle profile update for the newly created user
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic,
                            })
                        )
                    })
                    .catch((error) => {
                        setErrorMessage(error.message) // Handle error if profile update fails
                    })
            })
            .catch((error) => {
                // Check if the error is because the email is already in use
                if (error.code === 'auth/email-already-in-use') {
                    setErrorMessage(
                        'This email is already in use. Please log in or use a different email.'
                    )
                } else {
                    setErrorMessage(error.message) // General error handling
                }
            })
    }

    return (
        <div className='login'>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQB5UGcr_sCKVk59d6INDp8lzANgCtu8Q3Q&s'
                alt='Linkedin picture'
            />
            <form onSubmit={loginToApp}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder='Full name (required if registering)'
                />

                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    type='text'
                    placeholder='Profile pic URL (optional)'
                />

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    placeholder='Email'
                />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Password'
                />

                <button type='submit'>Sign In</button>
            </form>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}{' '}
            {/* Show error message here */}
            <p>
                Not a member?{' '}
                <span className='login__register' onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    )
}

export default Login
