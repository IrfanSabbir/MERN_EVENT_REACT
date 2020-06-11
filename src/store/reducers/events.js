import * as actionTypes from '../actions/actionTypes'

const initialState={
    events:[],
    hasEvent:false,
    error:'',
    create_error_messsage:'',
    eventCreated:false,
}

const reducer = (state =initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_EVENTS_START:
            return{
                ...state,
                hasEvent:false,
                error:'',
                create_error_messsage:'',
                eventCreated:false
            }
        case actionTypes.FETCH_EVENTS_SUCCESS:
            return{
                ...state,
                events:action.events,
                hasEvent:true,
                error:''
            }  
        case actionTypes.FETCH_EVENTS_FAIL:
            return{
                ...state,
                hasEvent:false,
                error:action.error
            }
        case actionTypes.CREATE_EVENT_SUCCESS:
            const newEvent = action.event
            return{
                ...state,
                events:state.events.concat(newEvent),
                eventCreated:true
            }  
        case actionTypes.CREATE_EVENT_FAIL:
            return{
                ...state,
                create_error_messsage:action.error,
                eventCreated:false
            }     
        
        default :
          return state    
    }
}

export default reducer