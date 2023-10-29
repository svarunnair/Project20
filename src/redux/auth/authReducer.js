import { POST_SIGNIN_FAILURE, POST_SIGNIN_REQUIEST, POST_SIGNIN_SUCCESS, POST_SIGNUP_FAILURE, POST_SIGNUP_REQUIEST, POST_SIGNUP_SUCCESS } from "./authAction"



const initState={
    isError:false,
    isLoading:false,
    signup:[],
    signin:[]
}

export const authReducer=(state=initState,action)=>{
    switch(action.type){
        case POST_SIGNUP_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_SIGNUP_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    signup:action.payload
                })
                case POST_SIGNUP_FAILURE:
                    return({
                        ...state,
                        isLoading:false,
                        isError:true
                    })



                    case POST_SIGNIN_REQUIEST:
                        return({
                            ...state,
                            isError:false,
                            isLoading:true
                        })
                        case POST_SIGNIN_SUCCESS:
                            return({
                                ...state,
                                isError:false,
                                isLoading:false,
                                signin:action.payload
                            })
                            case POST_SIGNIN_FAILURE:
                                return({
                                    ...state,
                                    isLoading:false,
                                    isError:true
                                })
            



                    default:
                        return({
                            ...state
                        })
    }
}