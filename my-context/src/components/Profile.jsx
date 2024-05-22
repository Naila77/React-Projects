import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    
      if(!user){
          return <div> <h3>Please login!</h3></div>
        }
        else{
            
            return <div>  <h3> Welcome {user.username}</h3></div>
        }


}

export default Profile
