'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Form = ({ initialData = {}, onSubmit, users }) => {
  const router = useRouter();
  const [formData, setFormData] = useState(initialData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Simulate data submission (no actual API call)
    // console.log('Form submitted:',formData);
    let cid = await fetch('/api/result/');
    cid = await cid.json();
    cid = cid.data
    let filter = cid.filter((item)=>item.user._id===formData.user)
    filter= filter[0];
    // console.log(cid);
    // console.log(filter);
    
    if(filter && filter.user._id  === formData.user){
      alert("Result already added")
    }
    else{

    let data = await fetch('/api/result',{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    data = await data.json();
    console.log('Form submitted:',data);
    alert(data.message)
    // router.push('/admin')
  }
  };

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
          <option value="">Select Student</option>
          {
            users.map((value,index)=><option key={index} value={value._id}>{value.name}</option>)
            
          }
        </select>
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="sci">Science</label>
        <input
          type="text"
          id="sci"
          name="sci"
          value={formData.sci || ''}
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
          value={formData.eng || ''}
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
          value={formData.hindi || ''}
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
          value={formData.maths || ''}
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
          value={formData.sst || ''}
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

export default Form;
