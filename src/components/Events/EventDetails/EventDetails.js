import React ,{useState} from 'react'
import {connect} from 'react-redux'

import { Paper , Typography , Button  } from '@material-ui/core'


import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const details = (props)=>{
    const  [closeBook, setCloseBook]= useState(true)

    const pushToSignIn =(history)=>{
        history.push('/auth')
      }

      const bookEventHandler=(eventId )=>{
       console.log(eventId)
        const reqData= {
           
            query: `
               mutation {
                bookEvent(eventId: "${eventId}"){
                    _id
                   
                 }
               }
            
            `
        }
        fetch(process.env.REACT_APP_GRAPHQL_API,{
            method:"post",
            body:JSON.stringify(reqData),
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ props.token
            }
        })
        .then(res=>{
            if(res.status !== 200 && res.status !== 201){
                 console.log(res)
                 alert("Failed to book event")
                throw new Error("Failed to book event")
            }
            return res.json()
        })
        .then(resDate=>{
            alert("booked")
            console.log(resDate.data)
        })
        .catch(err=>{
            console.log(err)
        })

    }
    

      const onToken = (token) => {
          console.log(props.event)
       const product = {
           name:props.event.title,
           price:props.event.price
       }
        axios.post(`${process.env.REACT_APP_REST_API}/payment`,{
            product:product,token:token
        })
        .then(data => {
            setCloseBook(false) 
            // console.log(data)
            bookEventHandler(props.event._id)
            alert(`🦄 Payment Confirmed. Order is Placed!!`);
        })
        .catch(error=>console.log(error))
      }

    return (
        <div  >
            {/* {closeBook ?  ()=> {props.bookHandler(props.event._id)} :null} */}
        <Paper  >   
                <Card  style={{backgroundColor:"rgb(226, 226, 226)"}} >
                    <CardContent style={{ textAlign:"center"}}>
                        <Typography color="error" variant="h4">
                        {props.event.title}
                        </Typography>
                        <Typography variant="h5" >
                       <AttachMoneyIcon/> : {props.event.price}
                        </Typography>
                        <Typography variant="body2" >
                        {props.event.date}
                        </Typography>
                    
                            <Typography variant="body2" component="p">
                            {props.event.description}
                            
                            
                            </Typography>
                      
                    </CardContent>
                       <div >
                            {/* { closeBook  && props.bookHandler(props.event._id)} */}
                             {props.token && props.userId === props.event.createdBy._id && <Button variant="outlined" disabled color="primary" style={{marginBottom:"5px"}}> You created This Event</Button> }
                             { closeBook && props.token && props.userId !== props.event.createdBy._id &&
                                 <StripeCheckout
                                 token={onToken}
                                 stripeKey={process.env.REACT_APP_STRIPE_KEY}
                                 name={"Book "+ props.event.title} 
                                 amount={props.event.price*100}>
                                  <Button variant="contained" color="primary" >
                                     Pay to Book
                                  </Button>
                                </StripeCheckout>
                             }
                             {!closeBook &&  <Typography variant="h4">Event Booked</Typography>}
                             {!props.token   &&  <Button variant="outlined" color="secondary" style={{marginBottom:"5px"}} onClick={()=>pushToSignIn(props.history)} > <NoteAddIcon/> Sign In Book This!</Button>}
                             <br/><br/>

                            { <Button color="secondary" onClick={props.cancleModal} >BACK</Button>}
                        </div>
                    </Card>
                    </Paper>

        </div>
    )
}
const mapStateToProps = state =>{
    return{
        token:state.auth.token,
        userId:state.auth.userId
    }
}
export default connect(mapStateToProps)(details)