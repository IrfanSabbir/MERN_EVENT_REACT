import React, {Component} from 'react'
import {connect} from 'react-redux'
import classes from './Events.css'
import Button from '../../components/UI/Buttons/Button'
import Modal from '../../components/UI/Modal/Modal'
import CreateEvent from '../../components/Events/CreateEvent/CreateEvent'
import AllEvents from '../../components/Events/AllEvents/AllEvents'

class Events extends Component{
    

    
    state={
      
        openModal:false,
        hasEvent:false,
        event:[],
        value:0,
        product:{
            name:"Testing",
            price:10,
            product_by:"Irfan"
        }
       
    }
  
   
 

    modalOpenHandler=()=>{
        this.setState({openModal:true})

    }
    cancleModalHandler=()=>{
        this.setState({openModal:false})
        
    }
    pushToLoginHandler=()=>{
        this.props.history.push('/auth')
    }

   
    
   
    render(){
      
       
        let modal= null
        if(this.state.openModal){
            modal = <Modal cancleModal={this.cancleModalHandler} >
                    <CreateEvent 
                         cancleModal={this.cancleModalHandler}
                         token={this.props.token}
                         />
            
                 </Modal>
        }
       

         let createEvents = <h1 style={{cursor:'pointer'}} onClick={this.pushToLoginHandler}> Please Log In to Create an Events!! </h1>
      
       
         if(this.props.isAuth){
            createEvents =(
                <React.Fragment>
                     <h1>Create your Events!</h1>
                    <Button clicked ={this.modalOpenHandler} type="Orange">Create Event!</Button>
                </React.Fragment>
            )
         }
         let allevent=  <AllEvents load={this.props.hasEvent}
                        events={this.props.events}
                        auth={this.pushToLoginHandler}
                        // bookEvent={this.bookEventHandler}

                        state={this.state}

                        />
        

      
        return(
            <div>
                {this.props.error}
                 <div className={classes.EventCreate}>
                       {createEvents}
                     
                  </div> 
                 {modal}
                 <br/>
                { allevent}
               
               
              
            </div>
        )
    }

}

const mapStateToProps = state =>{
    return{
      token:state.auth.token,  
      isAuth:state.auth.token !== null,
      events:state.event.events,
      hasEvent:state.event.hasEvent,
      error:state.event.error
    }
  }
  

export default connect(mapStateToProps)(Events)