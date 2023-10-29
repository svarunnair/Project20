import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  
  const navigate=useNavigate()

  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/signin')
  }
  return (
    <div>Home
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Home