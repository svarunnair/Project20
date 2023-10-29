import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getData } from '../redux/data/action';

function Home() {
  
  const navigate=useNavigate()

  const mainData=useSelector((store)=>store.data.data)
  const dispatch=useDispatch()

  console.log("mainData",mainData)
  useEffect(()=>{
    dispatch(getData())
  },[])
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/signin')
  }
  return (
    <div>Home
      {mainData?.map((item)=>(
        <>
        {item.name}
        </>
      ))}
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default Home