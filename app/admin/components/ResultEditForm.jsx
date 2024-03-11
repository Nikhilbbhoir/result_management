'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const EditForm =({ initialData = {}, onSubmit, users,id }) => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialData);
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Simulate data submission (no actual API call)
    console.log('Form submitted:',formData);
    let data = await fetch('/api/result/'+ id,{
      method:"PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    data = await data.json();
    console.log('Form submitted:',data);
    if(data){
      alert(data.message)
      // console.log(data)
      router.push('/admin')
    }else{
      alert("Some Error Occured")
    }
    // You can clear form or display a success message here
  };
  const curr_id = id;
  // console.log("URL Id" + curr_id);

  const getData = async()=>{
    let data = await fetch(`/api/result/${curr_id}`);
    data = await data.json()
    console.log(data.data.user.name)
    if(!data){
      alert("No Data Found")
    }
    setResult(data.data)
  }
  useEffect(()=>{
    getData()
  }, [])
  
    // const name =result.user.name || "";
    console.log(result);

  return (
    <div className="flex flex-col">
        <h2 className='text-2xl font-bold mb-4'>Insert/Updata Subject Data</h2>
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-1">
        <label htmlFor="user">Student</label>
        <select
          type="text"
          id="user"
          name="user"
          // value={formData.user || ''}
          onChange={handleChange}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"
        >
          {
            <option value={result._id}>{result.user ? result.user.name : "Getting Details..." }</option>
          }
        </select>
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="sci">Science</label>
        <input
          type="text"
          id="sci"
          name="sci"
          // value={result.sci}
          value={formData.sci || result.sci || ''}
          onChange={handleChange}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="eng">English</label>
        <input
          type="text"
          id="eng"
          name="eng"
          value={formData.eng || result.eng  || ''}
          onChange={handleChange}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="hindi">Hindi</label>
        <input
          type="text"
          id="hindi"
          name="hindi"
          value={formData.hindi || result.hindi  || ''}
          onChange={handleChange}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="maths">Maths</label>
        <input
          type="text"
          id="maths"
          name="maths"
          value={formData.maths || result.maths  || ''}
          onChange={handleChange}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="sst">SST</label>
        <input
          type="text"
          id="sst"
          name="sst"
          value={formData.sst || result.sst  || ''}
          onChange={handleChange}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-sky-500"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        {initialData ? 'Submit' : 'Update'}
      </button>
    </form>
    </div>
  );
};

export default EditForm;
