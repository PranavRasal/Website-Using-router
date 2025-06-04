import React from 'react'
import { useParams } from 'react-router-dom'
function user() {
    const {id} = useParams()
  return (
    <div>
      <h1 className='text-center p-4 bg-blue-400 text-5xl'>User : {id}</h1>
    </div>
  )
}

export default user

