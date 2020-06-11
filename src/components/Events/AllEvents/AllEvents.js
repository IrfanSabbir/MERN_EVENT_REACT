import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { Paper , Typography , Button, LinearProgress  } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '../../UI/Modal/Modal'  
import DetailsPage from '../EventDetails/EventDetails'
const useStyles = makeStyles((theme) => ({
    root: {
      width: '80%',
      marginTop:'5px',
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }));


const events = (props)=>{
    const [event, setEvent] = useState()
    const [modal, setModal] = useState(false)



      const openModalHandler = (event)=>{
        setEvent(event)
        setModal(true)
      }
      const closeModalHandler = ()=>{
        setEvent({})
        setModal(false)
      }
    
    const classes = useStyles();

    let events=  <div className={classes.root}>
        <LinearProgress />
        <LinearProgress color="secondary" />
    </div>
    
    let modalOpen =null
    if(modal){
        modalOpen = <Modal cancleModal={closeModalHandler}>
            <DetailsPage 
                cancleModal={closeModalHandler}
                event={event}
                history={props.history}
                bookHandler={props.bookEventHandler}
            />
        </Modal>
    }
    if(props.load === true){
      
        events = props.events.map(event=>{
        return(
            
            <Grid item  xs={8} sm={6} md={4} key={event._id }  >
                
                <Paper variant="outlined">   
                <Card  style={{backgroundColor:"rgb(226, 226, 226)"}} >
                    <CardContent>
                        <Typography color="error" variant="h4">
                        {event.title}
                        </Typography>
                        <Typography variant="h5" >
                       <AttachMoneyIcon/> : {event.price}
                        </Typography>
                        <Typography variant="body2" >
                        {event.date}
                        </Typography>
                    
                            <Typography variant="body2" component="p">
                            {event.description}
                            
                            
                            </Typography>
                      
                    </CardContent>
                       <div >
                       <Button variant="outlined"  color="primary" style={{marginBottom:"5px"}}  onClick={()=>openModalHandler(event)}> View Details Event</Button>
                         
                        </div>
                    </Card>
                    </Paper>
            </Grid>   
        
        )
    })
     }
 
   
    return(
        <React.Fragment>
            {modalOpen}
            <Paper variant="outlined" >
               <Button variant="contained"  disabled>
                    <Typography variant="h4" color="primary" >Here is all events</Typography>    
                </Button>
                 <br/><br/> 
                 
                   
            </Paper>
            <Paper>
                <Grid container alignItems="center" alignContent="center" justify="center" spacing={3} >
                        
                        {events}   
                        
                </Grid>
            </Paper>    

        </React.Fragment>
    )
}
const mapStateToProps = state =>{
    return{
        token:state.auth.token,
        userId:state.auth.userId
    }
}


export default withRouter(connect(mapStateToProps)(events))