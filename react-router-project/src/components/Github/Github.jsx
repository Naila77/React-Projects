import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
  //  const [data,setData] = useState([])
    const data = useLoaderData()
 //   useEffect(() => {
 //       fetch('https://api.Github.com/users/nailamasroor')
 //       .then(res => res.json())
 //       .then(data=>{setData(data)})

 //   },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers: {data.followers}
        <img src='{data.avatar_url}' alt="Git picture" width={300} />
      
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const res = await fetch('https://api.github.com/users/nailamasroor')
    return res.json()
}
