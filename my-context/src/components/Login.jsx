import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})
            }

  return (
    <div>
      <h1> Login</h1>
      <input className='px-2 py-1' type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
      <input className='px-2 py-1' type='text' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
