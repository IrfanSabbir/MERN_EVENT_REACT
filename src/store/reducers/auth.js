import * as actionTypes from '../actions/actionTypes'

const initialState ={
    token :null,
    userId:null,
    file:null
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                token:action.token,
                userId:action.userId,
                file:action.file
            }
        case  actionTypes.LOG_OUT:
            return{
                ...state,
                token:null,
                userId:null,
                file:null
            }    
        default :
         return state    
    }
}

export default reducer
