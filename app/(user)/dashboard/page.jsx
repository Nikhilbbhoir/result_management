
import Jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const token = async()=>{
  const tdata = await cookies()
  const token = tdata.get('token')
  // console.log(token.value);
  const payload = Jwt.verify(token.value, process.env.SECRET_KEY);
  const id = payload.id
  // console.log(id);
  return id
}
async function getdata(id){
  let data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/result`,{cache:"no-cache"})
  data = await data.json();
  const filter = data.data.filter((item)=>item.user._id == id)
  // console.log(filter);
  return filter
}

const page = async() => {
  const id = await token()
  console.log(id)
  const datafinal = await getdata(id)
  const data = datafinal[0]
  console.log(data);
  
  const total = data.maths + data.sst + data.hindi +data.sci + data.eng
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto py-12 px-4">
        <h2 className="bg-zinc-800 text-white text-center  py-2">Welcome to Dashboard</h2>
          <div className="flex justify-center bg-white rounded-lg shadow px-4 py-6">
            <table className="border-2 border-slate-900 w-1/2">
              <thead>
                {/* Personal Details Heading  */}
                
                <tr className="bg-sky-600 text-white">
                  <th className="border p-2" colSpan={4}>Personal Details</th>
                </tr>

                <tr>
                  <th className="border p-2" colSpan={2}>Full Name</th>
                  <td className="border p-2" colSpan={2}>{data.user.name}</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Father Name</th>
                  <td className="border p-2" colSpan={2}>{data.user.fathername}</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Contact</th>
                  <td className="border p-2" colSpan={2}>{data.user.contact}</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Email</th>
                  <td className="border p-2" colSpan={2}>{data.user.email}</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Roll No</th>
                  <td className="border p-2" colSpan={2}>{data.user.roll}</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Class</th>
                  <td className="border p-2" colSpan={2}>{data.user.className}</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>School</th>
                  <td className="border p-2" colSpan={2}>{data.user.school}</td>
                </tr>

                {/* Marks Details Heading */}
                <tr className="bg-red-600 text-white">
                  <th className="border p-2" colSpan={4}>Marks Details</th>
                </tr>

                <tr>
                  <th className="border-2 p-2">Subject</th>
                  <th className="border-2 p-2">Total</th>
                  <th className="border-2 p-2">Pass</th>
                  <th className="border-2 p-2">Obtain</th>
                </tr>
                <tr>
                  <th className="border-2 p-2">Maths</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">35</td>
                  <td className="border-2 p-2">{data.maths}</td>
                </tr>
                <tr>
                  <th className="border-2 p-2">Sci</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">35</td>
                  <td className="border-2 p-2">{data.sci}</td>
                </tr>
                <tr>
                  <th className="border-2 p-2">SST</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">35</td>
                  <td className="border-2 p-2">{data.sst}</td>
                </tr>
                <tr>
                  <th className="border-2 p-2">ENG</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">35</td>
                  <td className="border-2 p-2">{data.eng}</td>
                </tr>
                <tr>
                  <th className="border-2 p-2">Hindi</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">35</td>
                  <td className="border-2 p-2">{data.hindi}</td>
                </tr>

                {/* Status of Passing  */}
                <tr className="bg-green-600 text-white">
                  <th className="border p-2" colSpan={4}>Passing Details</th>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Total Marks</th>
                  <td className="border p-2" colSpan={2}>500</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Marks Obtained</th>
                  <td className="border p-2" colSpan={2}>{total}</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Percentage</th>
                  <td className="border p-2" colSpan={2}>{(total/500)*100}</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Status(Pass or Fail)</th>
                  <td className="border p-2" colSpan={2}>{data.maths>=35 && data.sci>=35 && data.sst>=35 && data.hindi>=35 && data.eng>=35 ? <h1 className="text-green-700">Pass</h1> : <h1 className="text-red-700">Fail</h1> }</td>
                </tr>
              </thead>

            </table>
          </div>
      </main>
    </div>
  );
};

export default page;
