import React, { useState } from 'react'
import './App.css'

function Login() {
    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')
    const [name, setName] = useState(' ')
    const [profilePic, setProfilePic] = useState(' ')

    const loginToApp = (e) => {
        e.preventDefault()
    }

    const register = () => {
        if (!name) {
            return alert('please enter a full name!')
        }
    }

    return (
        <div className='login'>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQB5UGcr_sCKVk59d6INDp8lzANgCtu8Q3Q&s'
                alt='Linkedin picture'
            />

            <form>
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

                <button type='submit' onClick={loginToApp}>
                    Sign In
                </button>
            </form>

            <p>
                Not a memeber?{' '}
                <span className='login__register' onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    )
}

export default Login
