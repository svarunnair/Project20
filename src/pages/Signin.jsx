

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { postSignin } from '../redux/auth/authAction'

export default function Signin() {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
   
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleEmail=(e)=>{
        let value= e.target.value 
        setEmail(value)
    }
    const handlePassword=(e)=>{
        let value=e.target.value 
        setPassword(value)
    }

    const handleSubmit=()=>{
        let data={
            email:email,
            password:password
        }
        dispatch(postSignin(data))
        navigate('/home')
    
    }

    const handleClick=()=>{
        navigate('/signup')
        console.log("click")
    }
    const click=()=>{
        navigate('/signup')
    }



  return (

   <>
  
    <Flex
    color={'white'}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
             <Text color={'blue.400'}></Text>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl onChange={handleEmail} id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl onChange={handlePassword} id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button onClick={handleSubmit}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
              <Link onClick={handleClick}>For Signup</Link>
              <Link onClick={click}>Sign up</Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    

    </>
  )
}