import * as actionTypes from './actionTypes'

const fetchBookingsStart =()=>{
    return{
        type:actionTypes.FETCH_BOOKINGS_START
    }
}
const fetchBookingsSuccess =(bookings)=>{
    return{
        type:actionTypes.FETCH_BOOKINGS_SUCCESS,
        bookings:bookings
    }
}

const fetchBookingsFail =(error)=>{
    return{
        type:actionTypes.FETCH_EVENTS_FAIL,
        error:error
    }
}


export const fetchBookings= (token)=>{
    return dispatch=>{
        dispatch(fetchBookingsStart())

  
        const reqData={
            query: `
                 query{
                    bookings{
                        _id
                        event{
                            _id
                            title
                            price
                            date
                        }
                        user{
                            email
                            _id
                        }
                    }
                 }
            `
        }
        fetch(process.env.REACT_APP_GRAPHQL_API,{
            method:"post",
            body:JSON.stringify(reqData),
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ token
            }
        })
        .then(res=>{
            
            if(res.status !== 200 && res.status !== 201){
                dispatch(fetchBookingsFail("fetching bookings fails"))
            }
            return res.json()
        })
        .then(resData=>{
            // console.log(resData)
            const bookings= resData.data.bookings
            dispatch(fetchBookingsSuccess(bookings))
        })
        .catch(err=>{
            console.log(err)
            dispatch(fetchBookingsFail("fetching bookings fails"))
        })
    }
}
