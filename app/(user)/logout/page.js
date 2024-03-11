'use client'

import { useRouter } from "next/navigation";



const Logout = async() => {
  const router = useRouter();
  const log = async() =>{
    // e.preventDefault();
  
    let data = await fetch('/api/user/logout')
    console.log(data);
    if(data){
      alert("Logout Successfully!!");
      router.refresh()
    }
  }
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <button className="bg-blue-950 text-white p-4 rounded-md" type='submit' 
        onClick={(e)=> log(e)}
        >Logout</button>
        
      </div>
  )
}

export default Logout