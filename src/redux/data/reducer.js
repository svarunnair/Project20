import { DELETE_CART_FAILURE, DELETE_CART_REQUIEST, DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUIEST, GET_CART_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, PATCH_CART_FAILURE, PATCH_CART_REQUIEST, PATCH_CART_SUCCESS, POST_CART_FAILURE, POST_CART_REQUIEST, POST_CART_SUCCESS } from "./action"



const initState={
    isError:false,
    isLoading:false,
    data:[],
    postCart:[],
    getCart:[],
    patchCart:[],
    deleteCart:[]
}
export const dataReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_DATA_REQUIEST:
            return({
                ...state,
                isLoading:true,
                isError:false,
            })
            case GET_DATA_SUCCESS:
                return({
                    ...state,
                    isLoading:false,
                    isError:false,
                    data:action.payload
                })
                case GET_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case POST_CART_REQUIEST:
                        return({
                            ...state,
                            isLoading:true,
                            isError:false,
                        })
                        case POST_CART_SUCCESS:
                            return({
                                ...state,
                                isLoading:false,
                                isError:false,
                                postCart:action.payload
                            })
                            case POST_CART_FAILURE:
                                return({
                                    ...state,
                                    isError:true,
                                    isLoading:false
                                })


                                case GET_CART_REQUIEST:
                        return({
                            ...state,
                            isLoading:true,
                            isError:false,
                        })
                        case GET_CART_SUCCESS:
                            return({
                                ...state,
                                isLoading:false,
                                isError:false,
                                getCart:action.payload
                            })
                            case GET_CART_FAILURE:
                                return({
                                    ...state,
                                    isError:true,
                                    isLoading:false
                                })




                                case PATCH_CART_REQUIEST:
                                    return({
                                        ...state,
                                        isLoading:true,
                                        isError:false,
                                    })
                                    case PATCH_CART_SUCCESS:
                                        return({
                                            ...state,
                                            isLoading:false,
                                            isError:false,
                                            patchCart:action.payload
                                        })
                                        case PATCH_CART_FAILURE:
                                            return({
                                                ...state,
                                                isError:true,
                                                isLoading:false
                                            })
            

                                            case DELETE_CART_REQUIEST:
                                    return({
                                        ...state,
                                        isLoading:true,
                                        isError:false,
                                    })
                                    case DELETE_CART_SUCCESS:
                                        return({
                                            ...state,
                                            isLoading:false,
                                            isError:false,
                                            deleteCart:action.payload
                                        })
                                        case DELETE_CART_FAILURE:
                                            return({
                                                ...state,
                                                isError:true,
                                                isLoading:false
                                            })





                    default:
                        return({
                            ...state
                        })
    }
}