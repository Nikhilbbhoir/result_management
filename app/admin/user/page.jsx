import React from 'react'
import ManageUsers from '../components/ManageUser'

const page = () => {
  return (
    <div className="container mx-auto">
    {/* Display appropriate message if unauthorized */}
    {/* Render ManageUsers component if authorized */}
    {/* {isAuthenticated ?

     : <p>Unauthorized access.</p>} */}
     <ManageUsers />
  </div>
  )
}

export default page