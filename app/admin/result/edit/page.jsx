import EditForm from '../../components/ResultEditForm'

const page = () => {
  const users = [
    {
      _id:23,
      name:"ghj"
    }
  ]
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
    <EditForm users={users} />
  </div>
  )
}

export default page