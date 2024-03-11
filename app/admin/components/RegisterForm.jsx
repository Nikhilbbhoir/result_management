'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterAdminForm(){
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // handleChange and handleSubmit
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData)
    // submit form data

    let data = await fetch("/api/admin/register",{
      method:"POST",
      body:JSON.stringify(formData),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    data = await data.json();
    if(data){
      alert(data.message)
    }
    router.push('/admin/login')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <form onSubmit={handleSubmit}>
      
      <div className="mb-5">
        <label htmlFor="name">User Name</label>
        <input 
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border p-2 rounded-md" 
        />
      </div>

      <div className="mb-5">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Register</button>

    </form>
    </div>
    </div>
  )

}