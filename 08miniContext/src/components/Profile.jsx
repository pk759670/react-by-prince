import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <div>Please Login</div>
    
    return (
    <div>Profile
        <h1>{user.name}</h1>
        <h1>{user.Password}</h1>
    </div>
    )
}

export default Profile