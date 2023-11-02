// import { useDisclosure } from '@chakra-ui/react'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getPayment } from '../redux/data/action'

// function Payment() {

//     const payment=useSelector((store)=>store.data.getPayment)
//     const dispatch=useDispatch()

//     console.log("payment",payment)

//     useEffect(()=>{
//         dispatch(getPayment())
//     },[])

//   return (
//     <div>Payment
//         <>
//         {payment?.map((item)=>(
//             <>
//             {item.name}
            
//             </>

//         ))}
//         </>
//     </div>
//   )
// }

// export default Payment










import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  Link,
  
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getPayment } from '../redux/data/action'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Payment() {

    const payment=useSelector((store)=>store.data.getPayment)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    console.log("payment",payment)

    useEffect(()=>{
        dispatch(getPayment())
    },[])

    const handleBack=()=>{
        navigate(-1)
    }




  return (

    <>

    <Link display={'flex'} onClick={handleBack}>Back</Link>
    {payment?.map((item)=>(

        <>
<Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={item.image }
          objectFit="cover"
          alt="#"
        />
        <Flex justify={'center'} mt={-22}>
          <Avatar
            size={'xl'}
            src={item.image}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>
        <Text color={'white'}>{item.name}</Text>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              John Doe
            </Heading>
            <Text color={'gray.500'}>Ordere placed</Text>
          </Stack>

          
            
          
        </Box>
      </Box>
    </Center>


</>
    ))}
   


    


    </>
  )
}