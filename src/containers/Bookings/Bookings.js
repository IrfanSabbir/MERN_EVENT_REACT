import React, {Component} from 'react'
import {connect} from 'react-redux'

import ShowBookings from '../../components/Events/ShowBookings/ShowBookings'
import BookingController from '../../components/Events/Bokingcontroler/BookingController'
import BookingChart from '../../components/Events/Bokingcontroler/chart/chart'
import * as action from '../../store/actions/index'
// import axios from 'axios'


class Bookings extends Component{
    constructor(props){
        super(props)
        const token= props.token
        
        props.onBokingFetch(token)
       
    }
    state={
        hasBookings:false,
        bookings: [],
        deletedId:'',
        booking:'list',
        value:'bookings',
        
    }
    


    
    deleteBookingsHandler=(bookingId)=>{
        const reqData= {
           
            query: `
               mutation {
                cancleBooking(bookingId: "${bookingId}"){
                    _id
                    title
                 }
               }
            
            `
        }
        fetch(process.env.REACT_APP_GRAPHQL_API,{
            method:"post",
            body:JSON.stringify(reqData),
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ this.props.token
            }
        })
        .then(res=>{
            if(res.status !== 200 && res.status !== 201){
                //  console.log(res)
                 alert("Failed to book event")
                throw new Error("Failed to book event")
            }
            return res.json()
        })
        .then(resDate=>{
            alert("Deleted")
            const updatedBookings = this.state.bookings.filter(booking=>booking._id !== bookingId)
            this.setState({bookings:updatedBookings})
        })
        .catch(err=>{
            console.log(err)
        })
    }
  

    categoryChangeHandler = newValue =>{
        // console.log(newValue)
        this.setState({ value: newValue });
    }
   

   render(){

    //    console.log(this.props.bookings)
        const tab= <BookingController 
            value={this.state.value}
            handleChange={this.categoryChangeHandler}
        />

       let  showBooking  = (
                < ShowBookings 
                bookings={this.props.bookings}
                hasBookings={this.props.hasBookings}
                userId={this.props.userId}
                delteBooking={this.deleteBookingsHandler}
                
            />  
           )
       
       if(this.state.value === 'chart' ){
      
        showBooking=(
               <BookingChart 
               bookings={this.props.bookings}
               />
           )
       }
       
        
        return(
            <div> 
                {tab}
                <br/><br/>
                {showBooking}
            </div>
        )
    }

}
const mapStateToProps = state =>{
    return{
      token:state.auth.token,  
      userId:state.auth.userId,
      isAuth:state.auth.token !== null,
      bookings:state.booking.bookings,
      hasBookings:state.booking.hasBookings
    }
  }

const mapDispatchToProps = dispatch=>{
    return{
        onBokingFetch:(token)=>dispatch(action.fetchBookings(token))
    }
}  
  

export default connect(mapStateToProps, mapDispatchToProps)(Bookings)