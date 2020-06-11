import React from "react";
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import image from './placeholder.png'




// import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      textAlign:'center',
      maxWidth: 345,
      borderRadius: 3,
      border: 0,
      marginTop:'10%',
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgb(34, 34, 34, 0.5)',
    },
  });
  
const profile = (props)=>{
    const classes = useStyles();
    
    const email =localStorage.getItem('email')
    let src = image
   console.log(props.file)
    if(props.file && props.file.length>5){
        console.log("here")
        src = `${process.env.REACT_APP_REST_API}+/uploads/images/${props.file}`
    }
    return(
        <Grid container alignItems="center" alignContent="center" justify="center" spacing={3} >
        <Grid item  xs={8} sm={6} md={4}  style={{marginBottom:"5px"}}>    
            {/* <Paper variant="outlined"> */}
            <Card className={classes.root}  style={{borderRadius:"2px solid green",textAlign:"center", paddingTop:"10px"}}>
            <CardActionArea>
                <CardMedia
                component="img"   
                alt="Contemplative Reptile"
                style={{backgroundColor :"rgb(34, 34, 34, 0.5)"}}
                
                image= { src}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Email :  {email}
                </Typography>
                </CardContent>
            </CardActionArea>
            <div >
                <CardActions>
               
                    <Button size="small" color="primary" >
                       Events
                    </Button>
                    <Button size="small" color="primary">
                    Bookings
                    </Button>
                </CardActions>
            </div>
            </Card>
            {/* </Paper>  */}
     </Grid>
 
     </Grid>
    )
}
const mapStateToProps = state =>{
    return{
      token:state.auth.token,
      file:state.auth.file,
     
    }
  }
export default connect(mapStateToProps)(profile)