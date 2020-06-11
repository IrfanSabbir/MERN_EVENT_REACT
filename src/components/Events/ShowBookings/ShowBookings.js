import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '80%',
      marginLeft: '10%',
      marginTop:'5px',
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }));

const showEvent = (props)=>{
    const classes = useStyles();
    let bookings=  <div className={classes.root}>
        <LinearProgress />
        <LinearProgress color="secondary" />
    </div>
    
     if(props.hasBookings){
         bookings = props.bookings.map(booking=>{
        if(booking.user._id === props.userId ){  
          
        return(
            <Grid item  xs={8} sm={6} md={4} key={booking._id }  style={{marginBottom:"5px"}}>
                <Paper variant="outlined">   
                <Card  style={{backgroundColor:"rgb(226, 226, 226)"}} >
                    <CardContent>
                        <Typography color="error" variant="h4">
                            {/* {booking._id} */}
                        {booking.event.title} : ({" "+booking.event.price+"$"})
                        {/* {booking.event.title} : ({" "+booking.event.price+"$"}) */}
                        </Typography>
                        
                            <Typography variant="body2" >
                                {booking.event.date}
                            </Typography>
                        
                        
                    </CardContent>
                       <div >
                     
                            <Button variant="outlined" color="secondary" style={{marginBottom:"5px"}} onClick={()=>props.delteBooking(booking._id)}> <NoteAddIcon/>  Delete Bookings!</Button>
                        </div>
                    </Card>
                    </Paper>
            </Grid>   
        
        )
        }
        else{
            return null
        }
        
    })
    
    
 
    }
    return(
       <React.Fragment>
           <Paper variant="outlined" >
                {/* <Button variant="contained"  disabled style={{marginBottom:"10px"}}>
                    <Typography variant="h4" color="primary" >Showing all Booked events</Typography>    
                </Button> */}
                 <Paper>
                    <Grid container alignItems="center" alignContent="center" justify="center" spacing={3} >
                        {bookings}    
                    </Grid>
               </Paper> 
           
                   
            </Paper>
          
       </React.Fragment>
    )

}

export default React.memo(showEvent)

