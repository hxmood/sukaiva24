"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !email || !password) {
            setError("all fields are necessary")
            return
        }

        try {
            const userExist = await fetch("/api/userCheck", {
                method: "POST",
                body: JSON.stringify({email})
                
            })
            const {user} = await userExist.json()
            if (user) {
                setError("email aldready exists")                                                                                                               
                return
            }

            const response = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify({name, email, password})
            })

            if (response.ok) {
                alert("registered successfully")
                setName('')
                setEmail('')
                setPassword('')
                router.push("/login")
            }
        } catch (error) {
            console.log(error);
        }
       
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='flex flex-col p-16 rounded shadow-lg border-t-4 border-green-500 bg-white gap-4'>
            <h1 className='text-xl font-bold text-center mb-4'>Register</h1>
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Enter fullname'/>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter email'/>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter password'/>
            <h3 className= {`${error && "text-sm bg-red-500 text-white w-fit p-[2px] rounded"}`}>{error}</h3>
            <button onClick={handleSubmit} className='bg-green-500 p-3 text-white font-semibold text-lg mt-4'>Register</button>
        </form>
    </div>
  )
}

export default RegisterForm