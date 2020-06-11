import * as actionTypes from './actionTypes'

const fetch_event_start =()=>{
    return{
        type:actionTypes.FETCH_EVENTS_START
    }
}

const fetch_event_success =(events)=>{
    return{
        type:actionTypes.FETCH_EVENTS_SUCCESS,
        events:events
    }
}

const fetch_event_fail =(error)=>{
    return{
        type:actionTypes.FETCH_EVENTS_FAIL,
        error:error
    }
}
 export const fetchEvents = ()=>{
     return dispatch =>{
        dispatch(fetch_event_start())

        const reqData ={
            query:`
               query{
                    events{
                        _id
                        title
                        description
                        price
                        date
                        createdBy{
                            _id
                            email
                        }
                    }
               }
            `
        }
        fetch(`${process.env.REACT_APP_GRAPHQL_API}`,{
            method:"post",
            body:JSON.stringify(reqData),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res =>{
            if(res.status !== 200 && res.status !== 201){
                dispatch(fetch_event_fail("Fetching events fail. please check cetwork connection and reload"))
            }
            
            return res.json()
        })
        .then(resData=>{
            const events = resData.data.events
           

            dispatch(fetch_event_success(events))
            // this.setState({events:events})
            // this.setState({hasEvent:true})
            // this.setState({fetchEvents:false})
           
        })
        .catch(err=>{
            // console.log(err)
            dispatch(fetch_event_fail("please check Network connection and reload"))
        })

     }
 }

 const create_event_success =(event)=>{
    return{
        type:actionTypes.CREATE_EVENT_SUCCESS,
        event:event
    }
}

const create_event_fail =(error)=>{
    return{
        type:actionTypes.CREATE_EVENT_FAIL,
        error:error
    }
}

export const create_event=(title,description,price,date,token)=>{
    return dispatch=>{
        const data={
            query:`
                mutation{
                    createEvents(inputEvent:{ title:"${title}", description:"${description}", price:${price},date:"${date}"}){
                        _id
                        title
                        description
                        price
                        date
                        createdBy{
                            _id
                            email
                        }

                    }
                }   
            `
        }

    
    fetch(process.env.REACT_APP_GRAPHQL_API,{
        method:"post",
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+ token

        }
    })
    .then(res=>{
        if(res.status !== 200 && res.status !== 201){
            dispatch(create_event_fail("Creating event fails. please check cetwork connection and reload"))

        }
        return res.json()
    })
    .then(resData=>{
        const event=resData.data.createEvents
        console.log(event)
        dispatch(create_event_success(event))
    //    this.setState({eventCreated:true})
       
       
    })
    .catch(err=>{
        console.log(err)
        dispatch(create_event_fail("Creating event fails."))

    })
   
    }
}