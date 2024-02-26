import React from 'react'
import Form from '../../components/ResultForm'

const page = async() => {
  let callingAPIStudent = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`)
  callingAPIStudent = await callingAPIStudent.json();
  let data = callingAPIStudent.data
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <Form users = {data}/>
      </div>
  )
}

export default page