"use client"
import React, { useState } from 'react'
import {signIn} from "next-auth/react"
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await signIn("credentials", {
                email, password, redirect: false
            })
            if (res.error) {
                setError("invalid credentials ")
                return 
            }
            router.replace("adminpage")
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col p-16 rounded shadow-lg border-t-4 border-green-500 bg-white gap-4'>
            <h1 className='text-xl font-bold text-center mb-4'>Login</h1>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter email'/>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter password'/>

            {error && (
                <h3 className= {`${error && "text-sm bg-red-500 text-white w-fit p-[2px] rounded"}`}>{error}</h3>
            )}

            <button onClick={handleSubmit} className='bg-green-500 p-3 text-white font-semibold text-lg mt-4 hover:bg-green-700 transition'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm