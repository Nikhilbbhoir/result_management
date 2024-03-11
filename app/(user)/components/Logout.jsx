'use client'

const Logout = async() => {
  
  const log = async(e) =>{
    e.preventDefault();
    let data = await fetch(process.env.NEXT_PUBLIC_BASE_URL+'/api/user/logout')
    console.log(data);
    // alert(data.message)
  }
    return 
      <button type='submit' onClick={(e)=> log(e)}>Logout</button>
}

export default Logout