'use client'
import { useState } from "react";

export default function RegisterForm(){

  const [formData, setFormData] = useState({
    name: '',
    fathername: '',
    className: '',
    roll: '', 
    school: '',
    email: '',
    contact: '',
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

    let data = await fetch("/api/user/register",{
      method:"POST",
      body:JSON.stringify(formData),
      headers:{
        "Content-Type" : "application/json"
      }
    })
    data = await data.json();
    alert(data.message)
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <form onSubmit={handleSubmit}>
      
      <div className="mb-5">
        <label htmlFor="name">Name</label>
        <input 
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded-md" 
        />
      </div>

      <div className="mb-5">
        <label htmlFor="fathername">Father Name</label>
        <input
          type="text"  
          name="fathername"
          value={formData.fathername}
          onChange={handleChange}
          className="w-full border p-2 rounded-md" 
        />
      </div>

      <div className="mb-5">
        <label htmlFor="className">Class Name</label> 
        <input
          type="text"
          name="className"
          value={formData.className}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="roll">Roll Number</label>
        <input
          type="text"
          name="roll"
          value={formData.roll}
          onChange={handleChange}
          className="w-full border p-2 rounded-md" 
        />
      </div>

      <div className="mb-5">
        <label htmlFor="school">School Name</label>
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="contact">Phone Number</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
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

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
>Register</button>

    </form>
    </div>
    </div>
  )

}