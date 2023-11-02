import axios from "axios"



export const GET_DATA_REQUIEST="GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"

export const POST_CART_REQUIEST="POST_CART_REQUIEST"
export const POST_CART_SUCCESS="POST_CART_SUCCESS"
export const POST_CART_FAILURE="POST_CART_FAILURE"

export const GET_CART_REQUIEST="GET_CART_REQUIEST"
export const GET_CART_SUCCESS="GET_CART_SUCCESS"
export const GET_CART_FAILURE="GET_CART_FAILURE"

export const PATCH_CART_REQUIEST="PATCH_CART_REQUIEST"
export const PATCH_CART_SUCCESS="PATCH_CART_SUCCESS"
export const PATCH_CART_FAILURE="PATCH_CART_FAILURE"

export const DELETE_CART_REQUIEST="DELETE_CART_REQUIEST"
export const DELETE_CART_SUCCESS="DELETE_CART_SUCCESS"
export const DELETE_CART_FAILURE="DELETE_CART_FAILURE"

export const POST_PAYMENT_REQUIEST="POST_PAYMENT_REQUIEST"
export const POST_PAYMENT_SUCCESS="POST_PAYMENT_SUCCESS"
export const POST_PAYMENT_FAILURE="POST_PAYMENT_FAILURE"


export const DELETE_ALLCART_REQUIEST="DELETE_ALLCART_REQUIEST"
export const DELETE_ALLCART_SUCCESS="DELETE_ALLCART_SUCCESS"
export const DELETE_ALLCART_FAILURE="DELETE_ALLCART_FAILURE"


export const GET_PAYMENT_REQUIEST="GET_PAYMENT_REQUIEST"
export const GET_PAYMENT_SUCCESS="GET_PAYMENT_SUCCESS"
export const GET_PAYMENT_FAILURE="GET_PAYMENT_FAILURE"


    const getDataRequiest=()=>{
        return({
            type:GET_DATA_REQUIEST
        })
    }
    const getDataSuccess=(data)=>{
        console.log("succData",data)
        return({
            type:GET_DATA_SUCCESS,
            payload:data
        })
    }
    const getDataFailure=()=>{
        return({
            type:GET_DATA_FAILURE
        })
    }

const postCartRequiest=()=>{
    return({
        type:POST_CART_REQUIEST
    })
}
const postCartSuccess=(data)=>{
    console.log("succData",data)
    return({
        type:POST_CART_SUCCESS,
        payload:data
    })
}
const postCartFailure=()=>{
    return({
        type:POST_CART_FAILURE
    })
}

const getCartRequiest=()=>{
    return({
        type:GET_CART_REQUIEST
    })
}
const getCartSuccess=(data)=>{
    console.log("getcart",data)
    return({
        type:GET_CART_SUCCESS,
        payload:data
    })
}
const getCartFailure=()=>{
    return({
        type:GET_CART_FAILURE
    })
}

const patchCartRequiest=()=>{
    return({
        type:PATCH_CART_REQUIEST
    })
}
const patchCartSuccess=(data)=>{
    console.log("patchCart",data)
    return({
        type:PATCH_CART_SUCCESS,
        payload:data
    })
}
const patchCartFailure=()=>{
    return({
        type:PATCH_CART_FAILURE
    })
}

const deleteCartRequiest=()=>{
    return({
        type:DELETE_CART_REQUIEST
    })
}
const deleteCartSuccess=(data)=>{
    
    return({
        type:DELETE_CART_SUCCESS,
        payload:data
    })
}
const deleteCartFailure=()=>{
    return({
        type:DELETE_CART_FAILURE
    })
}

const postPaymentRequiest=()=>{
    return({
        type:POST_PAYMENT_REQUIEST
    })
}
const postPaymentSuccess=(data)=>{
    console.log("succData",data)
    return({
        type:POST_PAYMENT_SUCCESS,
        payload:data
    })
}
const postPaymentFailure=()=>{
    return({
        type:POST_PAYMENT_FAILURE
    })
}


const deleteAllcartRequiest=()=>{
    return({
        type:DELETE_ALLCART_REQUIEST
    })
}
const deleteAllcartSuccess=(data)=>{
    console.log("succData",data)
    return({
        type:DELETE_ALLCART_SUCCESS,
        payload:data
    })
}
const deleteAllcartFailure=()=>{
    return({
        type:DELETE_ALLCART_FAILURE
    })
}

const getPaymentRequiest=()=>{
    return({
        type:GET_PAYMENT_REQUIEST
    })
}
const getPaymentSuccess=(data)=>{
    
    return({
        type:GET_PAYMENT_SUCCESS,
        payload:data
    })
}
const getPaymentFailure=()=>{
    return({
        type:GET_DATA_FAILURE
    })
}













export const getData =()=>(dispatch)=>{
    console.log("getData",getData)
    dispatch(getDataRequiest())
    return axios({
        url:"http://localhost:8000/data",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
        console.log("resdata",res.data)
    })
    .catch((error)=>{
        dispatch(getDataFailure())
    })
}


export const postCart =(data)=>(dispatch)=>{
console.log("postCartnnnnn",data)
    dispatch(postCartRequiest())
    return axios({
        url:"http://localhost:8000/cart",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postCartSuccess(res.data))
        console.log("resdata,cart",res.data)
    })
    .catch((error)=>{
        dispatch(postCartFailure())
    })
}

export const getCart =()=>(dispatch)=>{
    
    dispatch(getCartRequiest())
    return axios({
        url:"http://localhost:8000/cart",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getCartSuccess(res.data))
        console.log("rescart",res.data)
    })
    .catch((error)=>{
        dispatch(getCartFailure())
    })
}

export const patchCart =(data,id)=>(dispatch)=>{
   console.log("dataaaa",data,id)
    dispatch(patchCartRequiest())
    return axios({
        url:`http://localhost:8000/cart/${id}`,
        method:"PATCH",
        data
    })
    .then((res)=>{
        dispatch(patchCartSuccess(res.data))
        console.log("resdataPATCH",res.data)
    })
    .catch((error)=>{
        dispatch(patchCartFailure())
    })
}


export const deleteCart =(id)=>(dispatch)=>{
    
    dispatch(deleteCartRequiest())
    return axios({
        url:`http://localhost:8000/cart/${id}`,
        method:"DELETE",
        data:id
    })
    .then((res)=>{
        dispatch(deleteCartSuccess(res.data))
        console.log("resdatadelete",res.data)
    })
    .catch((error)=>{
        dispatch(deleteCartFailure())
    })
}

export const postPayment =(data)=>(dispatch)=>{
  
    dispatch(postPaymentRequiest())
    return axios({
        url:"http://localhost:8000/payment",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postPaymentSuccess(res.data))
        console.log("POSTresdata",res.data)
    })
    .catch((error)=>{
        dispatch(postPaymentFailure())
    })
}

export const deleteAllcart =(id)=>(dispatch)=>{
    dispatch(deleteAllcartRequiest())
    return axios({
        url:`http://localhost:8000/cart/${id}`,
        method:"DELETE",
        
    })
    .then((res)=>{
        dispatch(deleteAllcartSuccess(res.data))
        console.log("AllDeleteresdata",res.data)
    })
    .catch((error)=>{
        dispatch(deleteAllcartFailure())
    })
}


export const getPayment =()=>(dispatch)=>{
    
    dispatch(getPaymentRequiest())
    return axios({
        url:"http://localhost:8000/payment",
        method:"GET"
    })
    .then((res)=>{
        dispatch(getPaymentSuccess(res.data))
        console.log("getPymtresdata",res.data)
    })
    .catch((error)=>{
        dispatch(getPaymentFailure())
    })
}

