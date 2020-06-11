import * as actionTypes from '../actions/actionTypes'

const initialState ={
    bookings:[],
    hasBookings:false
}
 const reducer =(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_BOOKINGS_START:
            return{
                ...state,
                hasBookings:false
            }
        case actionTypes.FETCH_BOOKINGS_SUCCESS:
            return{
                ...state,
                bookings:action.bookings,
                hasBookings:true
            }
        case actionTypes.FETCH_BOOKINGS_FAIL:
            return{
                ...state,
                bookingError:action.error,
                hasBookings:false
            }
        default: 
            return state    
            

    }
}

export default reducer