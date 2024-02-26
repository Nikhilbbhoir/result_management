
const Dashboard = () => {
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
                  <td className="border p-2" colSpan={2}>PQR</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Father Name</th>
                  <td className="border p-2" colSpan={2}>PQR</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Contact</th>
                  <td className="border p-2" colSpan={2}>PQR</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Email</th>
                  <td className="border p-2" colSpan={2}>PQR</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Roll No</th>
                  <td className="border p-2" colSpan={2}>PQR</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>Class</th>
                  <td className="border p-2" colSpan={2}>PQR</td>
                </tr>
                <tr>
                  <th className="border p-2" colSpan={2}>School</th>
                  <td className="border p-2" colSpan={2}>PQR</td>
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
                  <td className="border-2 p-2">75</td>
                </tr>
                <tr>
                  <th className="border-2 p-2">Sci</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">35</td>
                  <td className="border-2 p-2">75</td>
                </tr>
                <tr>
                  <th className="border-2 p-2">SST</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">35</td>
                  <td className="border-2 p-2">75</td>
                </tr>
                <tr>
                  <th className="border-2 p-2">ENG</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">35</td>
                  <td className="border-2 p-2">75</td>
                </tr>
                <tr>
                  <th className="border-2 p-2">Hindi</th>
                  <td className="border-2 p-2">100</td>
                  <td className="border-2 p-2">35</td>
                  <td className="border-2 p-2">75</td>
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
                  <th className="border p-2" colSpan={2}>Division</th>
                  <td className="border p-2" colSpan={2}>1st</td>
                </tr>
              </thead>

            </table>
          </div>
      </main>
    </div>
  );
};

export default Dashboard;
