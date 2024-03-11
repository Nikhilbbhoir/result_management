'use client'

import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const logout = async()=> {
    let data = await fetch(process.env.NEXT_PUBLIC_BASE_URL+'/api/admin/logout')
    data = await  data.json()
    if(data.success){
      alert(data.message)
      router.push('/admin/login')
    }
  };
  
  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={(e)=>logout(e)} className="p-2 bg-red-500 text-white text-2xl rounded-lg">Logout</button>
    </div>
  )
}

export default Logout