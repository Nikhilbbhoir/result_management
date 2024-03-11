import EditForm from '../../../components/ResultEditForm'

const page = ({params}) => {
  console.log(params.id);
  const users = [
    {
      _id:23,
      name:"ghj"
    }
  ]
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
    <EditForm users={users} id={params.id}/>
  </div>
  )
}

export default page