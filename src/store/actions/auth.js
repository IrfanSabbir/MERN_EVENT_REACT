import * as actionTypes from './actionTypes'

export const auth_success =(userId, token, file)=>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        token:token,
        userId:userId,
        file:file
        
    }
}

export const logout = ()=>{
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('ExpiresIn')
    localStorage.removeItem('image')

    return{
        type:actionTypes.LOG_OUT

    }
}

export const auth_time_out = (expiresIn)=>{
    const time = new Date(expiresIn).getTime()-new Date().getTime()
    return dispatch =>{
        setTimeout(()=>{
            dispatch(logout())
        },time)
    }
    
}


export const auth_start = (userId, token, expiresIn, file)=>{
    return dispatch =>{
        localStorage.setItem('image',file)
        localStorage.setItem('token',token)
        localStorage.setItem('userId', userId)
        localStorage.setItem('ExpiresIn', expiresIn)
        dispatch(auth_success(userId, token, file))
        dispatch(auth_time_out(expiresIn))
  

    }
}

export const auth_check = ()=>{
    return dispatch=>{
        const token = localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        }
        else{
            let expiresIn = new Date(localStorage.getItem('ExpiresIn'))
            if(expiresIn<= new Date()){
                dispatch(logout())
            } 
            else{
              const userId = localStorage.getItem('userId')
              const file = localStorage.getItem('image')
             
             
               
            
               dispatch(auth_success(userId, token, file))
               dispatch(auth_time_out(expiresIn))

            }
            
        }

    }
} 