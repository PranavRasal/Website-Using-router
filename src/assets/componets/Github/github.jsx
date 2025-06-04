import React from 'react'
import { useLoaderData } from 'react-router-dom'

function github() {
    const data= useLoaderData()
  return (
    <div>
      <h1 className='text-center p-4 bg-blue-400 text-5xl'>follow :{data.followers}<br>
    </br>
    <img src={data.avatar_url} /> </h1>
    </div>
  )
}

export default github
