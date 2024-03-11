'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AdminPanel = () => {
  const router = useRouter();
  const [tableData, setTableData] = useState([]); // Data for the table


  useEffect(()=>{
    async function handle(){
    // Fetch data from your API endpoint for initial table load
    // Replace with your actual API call
    let data = await fetch('/api/result',{cache:"no-cache"})
    data = await data.json()
    // console.log(data.data)
    setTableData(data.data)
    router.refresh();
  }
  handle()
  },[]);

  const handleDelete = async(id) => {
    // Implement delete functionality with your API endpoint
    let data = await fetch(`/api/result/${id}`,{
      method:"DELETE",
      cache:'no-cache'
    })
    data = await data.json();
    // console.log(data.success);
    if(data.success){
      alert(data.message)
      console.log("Refresh working");
    }else{
      alert("Something went wrong")
    }
    router.refresh();
  };


  return (
    <div className={'h-full flex' }>
      {/* Sidebar */}
    

      {/* Main content */}
      <main className={'h-auto flex-1 bg-gray-100 p-4 overflow-auto'}>
        <div className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold">Manage Result</h1>
        <Link href="/admin/result/add" className='bg-teal-700 text-white px-3 py-2 rounded'>Add New Result</Link>
        </div>

        {/* Table */}
        <table className="table-auto w-full">
          <thead>
            <tr className='bg-zinc-300'>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Student</th>
              <th className="px-4 py-2">Maths</th>
              <th className="px-4 py-2">Sci</th>
              <th className="px-4 py-2">SST</th>
              <th className="px-4 py-2">Hindi</th>
              <th className="px-4 py-2">English</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            tableData.map((item) => { 
              // console.log(item)
              return(
              <tr key={item._id}>
                <td className="px-4 py-2">{item._id}</td>
                <td className="px-4 py-2">{item.user ? item.user.name : "Loading..."}</td>
                <td className="px-4 py-2">{item.maths}</td>
                <td className="px-4 py-2">{item.sci}</td>
                <td className="px-4 py-2">{item.sst}</td>
                <td className="px-4 py-2">{item.hindi}</td>
                <td className="px-4 py-2">{item.eng}</td>
                <td className="px-4 py-2">
                  <Link className="text-white rounded p-2 bg-blue-500 hover:underline" href={`/admin/result/edit/${item._id}`}>
                  Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-white rounded p-2 bg-red-500 hover:underline ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )}
            )
              }
          </tbody>
        </table>

        {/* Add form for CRUD operations here */}
      </main>
    </div>
  );
};

export default AdminPanel;
