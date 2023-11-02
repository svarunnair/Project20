// import { useDisclosure } from '@chakra-ui/react'
// import React, { useEffect } from 'react'
// import { BsClockFill } from 'react-icons/bs'
// import { useDispatch, useSelector } from 'react-redux'
// import { getCart } from '../redux/data/action'

// function Cart() {
    

//     const cartData=useSelector((store)=>store.data.getCart)
//     const dispatch=useDispatch()

//     console.log("cartData",cartData)


//     useEffect(()=>{
//         dispatch(getCart())
//     },[])



//   return (
//     <div>Cart
//         <>

//         {cartData.map((item)=>(
//             <>
//             {item.name}
            
//             </>
//         ))}

// </>
//     </div>
//   )
// }

// export default Cart






import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  Img,
  
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteAllcart, deleteCart, getCart, patchCart, postPayment } from '../redux/data/action'
import { useNavigate } from 'react-router-dom'

export default function Cart() {

    const cartData=useSelector((store)=>store.data.getCart)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    console.log("cartData",cartData)


    useEffect(()=>{
        dispatch(getCart())
    },[])


    let total=cartData.reduce((acc,item,index)=>{
        return acc+item.price*item.quant
    },0)

    const handleAdd=(quant,id)=>{

        let data={
            quant:quant+1
        }
        dispatch(patchCart(data,id))

    }

    const handleReduce=(quant,id)=>{

        if(quant<2){
            quant=2
        }
        let data={
            quant:quant-1
        }
        dispatch(patchCart(data,id))

    }

    const handleClick=()=>{
      navigate('/payment')
    }

    





    const hanldeDelete=(id)=>{
        dispatch(deleteCart(id))
    }

    const handleBack=()=>{
      navigate(-1)
    }

    const handleBuy=()=>{

      cartData?.map((item)=>(
        dispatch(postPayment(item))
      ))
      
    }

    useEffect(()=>{
      cartData?.map((item)=>(
        dispatch(deleteAllcart(item.id))
      ))
    },[postPayment])





  return (

<>
<Button onClick={handleClick}>Payment</Button>
<Button display={'flex'} onClick={handleBack}>Back</Button>
<Box display={'flex'} gridArea={3}>
 
    <>

    {cartData.map((item)=>(
        <>

<Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={('gray.800', 'white')}
          align={'center'}>
          {/* <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            Hobby
          </Text> */}
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}></Text>
            <Text fontSize={'3x1'} fontWeight={800}>
              {item.name}
            </Text>
            <Text color={'gray.500'}></Text>
          </Stack>
        </Stack>
        

        <Box bg={('gray.50', 'gray.900')} px={6} py={10}>
         
          <Img src={item.image}/>
          
          <Text color={'white'}>Rs:{item.price}/-</Text>

          <Text color={'white'}>Quantity:{item.quant}</Text>
          <Button onClick={()=>handleAdd(item.quant,item.id)}
            mt={10}
            w={'full'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}>
           Add quantity
          </Button>

          <Button onClick={()=>handleReduce(item.quant,item.id)}

mt={10}
w={'full'}
bg={'green.400'}
color={'white'}
rounded={'xl'}
boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
_hover={{
  bg: 'green.500',
}}
_focus={{
  bg: 'green.500',
}}
          
          >Reduce quantity</Button>
          <Button onClick={()=>hanldeDelete(item.id)}>Delete</Button>
        </Box>
      </Box>
    </Center>
    
        
        
        </>
    ))}


Total amount : {total}

<Button onClick={handleBuy}>Buynow</Button>


    

    </>
    </Box>
    </>
  )
}