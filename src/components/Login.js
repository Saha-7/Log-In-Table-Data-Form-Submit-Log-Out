import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [input, setInput] = useState({ username: "", password: "" })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e) => {

    e.preventDefault();

    if(input.username === "admin" && input.password === "password"){
      localStorage.setItem("role", "admin")
      navigate('/home')
    }
    else if(input.username === "TestUser" && input.password === "NetlabsGlobal"){
      localStorage.setItem("role", "user")
      navigate('/home')
    }
    else{
      setError('Invalid credentials')
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-l from-cyan-300 to-white">

      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-2xl shadow-blue-900 hover:border-blue-900 border-2">

        <h2 className="text-3xl mb-4 font-bold font-sans">User Login</h2>
        {error ? <p className='text-red-700'>{error}</p> : null}

        <input
          type='text'
          placeholder='Username'
          value={input.username}
          onChange={(e) => setInput({ ...input, username: e.target.value })}
          className="p-2 w-full mb-4 border bg-gray-100 rounded-md"
        />

        <input
          type='password'
          placeholder='Password'
          onChange={(e)=> setInput({...input, password : e.target.value})}
          className="p-2 w-full mb-4 border bg-gray-100 rounded-md"
        />

        <button type="submit" className="bg-blue-950 text-white py-2 px-4 rounded font-sans">Login</button>

      </form>

    </div>
  )
}

export default Login
