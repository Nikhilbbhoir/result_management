'use client'
import { useState, useEffect } from 'react';
import Form from '../../components/ResultForm';

const Page = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`);
        if (!response) {
          throw new Error(`API call failed with status ${response.status}`);
        }
        const data = await response.json();
        setUsers(data.data); // Assuming users data is within data.data
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className='flex items-center justify-center h-screen text-7xl'>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <Form users={users} />
    </div>
  );
};

export default Page;















// import Form from '../../components/ResultForm'

// const page = async() => {
//   let callingAPIStudent = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`)
//   callingAPIStudent = await callingAPIStudent.json();
//   let data = callingAPIStudent.data

  
//   return (
//     <div className='min-h-screen flex items-center justify-center bg-gray-100'>
//       <Form users = {data}/>
//       </div>
//   )
// }

// export default page


// export async function getStaticProps() {
//   try {
//     let callingAPIStudent = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`)
//     callingAPIStudent = await callingAPIStudent.json();
//     let data = callingAPIStudent.data
//     // return {data}
//     return{
//       props: {
//         data, // Empty array for handling potential errors
//         error: true, // Indicate an error occurred
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }