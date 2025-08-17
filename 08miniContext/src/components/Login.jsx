import React,{useContext,useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
     const [name, setName] = useState('');
     const [Password, setPassword] = useState('')
     const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({name,Password})
        console.log('Login')
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter Name' />

        <input type="password"
         value={Password}
         onChange={(e) => setPassword(e.target.value)} 
         placeholder='Enter Password' />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login