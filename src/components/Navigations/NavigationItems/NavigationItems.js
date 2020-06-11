import React from "react";
import {connect} from 'react-redux'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'


const navigationItems =(props)=>{
    return(
       
        <ul className={classes.Navigationitems}>

             <NavigationItem link="/developer" exact>Developer</NavigationItem>
            <NavigationItem link="/" exact>Events</NavigationItem>
           {props.isAuth ? <NavigationItem link="/bookings" >Bookings</NavigationItem> : null}
          
           {props.isAuth && <NavigationItem link="/profile" >Profile</NavigationItem>}
           
           {props.isAuth ? <NavigationItem link="/logout" >Log Out</NavigationItem> : null}
           {!props.isAuth ?<NavigationItem link="/auth" >Log In</NavigationItem> :null }

    
          
        </ul>
      
         
    )
}

const mapStateToProps = state =>{
    return{
      isAuth:state.auth.token !== null
    }
  }
  

export default connect(mapStateToProps)(navigationItems)